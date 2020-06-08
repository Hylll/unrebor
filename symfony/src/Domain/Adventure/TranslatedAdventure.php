<?php

declare(strict_types=1);

namespace App\Domain\Adventure;

use Ramsey\Uuid\Uuid;
use Ramsey\Uuid\UuidInterface;

class TranslatedAdventure
{
    private UuidInterface $id;
    private string $name;
    private string $lang;
    private array $_links;

    public function __construct(string $id, string $name, string $lang)
    {
        $this->id = Uuid::fromString($id);
        $this->name = $name;
        $this->lang = $lang;

        $this->_links = [
            'self' => sprintf('/adventures/%s?lang=%s', $this->id, $this->lang)
        ];
    }

    static function create(Adventure $adventure, AdventureTranslation $adventureTranslation): TranslatedAdventure
    {
        return new TranslatedAdventure(
            $adventure->getId()->toString(),
            $adventureTranslation->getName(),
            $adventureTranslation->getLang()
        );
    }

    public function getId(): UuidInterface
    {
        return $this->id;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getLang(): string
    {
        return $this->lang;
    }

    public function getLinks(): array
    {
        return $this->_links;
    }
}