<?php

declare(strict_types=1);

namespace App\Repository;

use App\Domain\Adventure\Adventure;
use App\Domain\Adventure\AdventureRepository as AdventureRepositoryInterface;
use App\Domain\Adventure\TranslatedAdventure;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use PDO;
use Ramsey\Uuid\UuidInterface;

class AdventureRepository extends ServiceEntityRepository implements AdventureRepositoryInterface
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Adventure::class);
    }

    public function getAdventuresPage(int $page, int $limit, string $lang): array
    {
        $conn = $this->getEntityManager()->getConnection();

        $sql = 'SELECT a.id id, tr.lang lang, tr.name adventure_name from adventures a
                    JOIN adventures_translations tr on tr.adventure_id = a.id
                    WHERE tr.lang = :lang
                    ORDER BY name
                    LIMIT :limit OFFSET :offset;';
        $stmt = $conn->prepare($sql);
        $stmt->execute(['lang' => $lang, 'limit' => $limit, 'offset' => $limit * ($page - 1)]);

        $entries = $stmt->fetchAll();

        $adventures = [];
        foreach ($entries as $adventure) {
            $adventures[] = new TranslatedAdventure(
                $adventure['id'],
                $adventure['adventure_name'],
                $adventure['lang']
            );
        }

        return $adventures;
    }

    public function countAdventures(string $lang): int
    {
        $conn = $this->getEntityManager()->getConnection();

        $sql = 'SELECT count(a.id) from adventures a
                    JOIN adventures_translations tr on tr.adventure_id = a.id
                    WHERE tr.lang = :lang;';

        $stmt = $conn->prepare($sql);
        $stmt->execute(['lang' => $lang]);

        return $stmt->fetch(PDO::FETCH_COLUMN, 0);
    }

    public function getTranslatedAdventure(string $adventureId, string $lang): TranslatedAdventure
    {
        $conn = $this->getEntityManager()->getConnection();

        $sql = 'SELECT a.id id, tr.lang lang, tr.name adventure_name from adventures a
                    JOIN adventures_translations tr on tr.adventure_id = a.id
                    WHERE a.id = :id AND tr.lang = :lang;';

        $stmt = $conn->prepare($sql);
        $stmt->execute(['id' => $adventureId, 'lang' => $lang]);

        $adventure = $stmt->fetch();

        return new TranslatedAdventure(
            $adventure['id'],
            $adventure['adventure_name'],
            $adventure['lang']
        );
    }

    public function isAdventureAvailableInLang(string $adventureId, string $lang): bool
    {
        $conn = $this->getEntityManager()->getConnection();

        $sql = 'SELECT count(a.id) from adventures a
                    JOIN adventures_translations tr on tr.adventure_id = a.id
                    WHERE a.id = :id AND tr.lang = :lang;';

        $stmt = $conn->prepare($sql);
        $stmt->execute(['id' => $adventureId, 'lang' => $lang]);

        return $stmt->fetch(PDO::FETCH_COLUMN, 0) > 0;
    }

    public function getAdventure(UuidInterface $adventureId): Adventure
    {
        return $this->find($adventureId);
    }
}