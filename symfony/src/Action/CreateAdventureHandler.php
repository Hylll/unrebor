<?php

declare(strict_types=1);

namespace App\Action;

use App\Domain\Adventure\Adventure;
use App\Domain\Adventure\AdventureTranslation;
use App\Domain\Adventure\TranslatedAdventure;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Messenger\Handler\MessageHandlerInterface;

class CreateAdventureHandler implements MessageHandlerInterface
{
    private EntityManagerInterface $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function __invoke(CreateAdventure $command) {
        $adventure = new Adventure();
        $adventureTranslation = new AdventureTranslation($adventure, $command->getLang(), $command->getName());

        $this->entityManager->persist($adventure);
        $this->entityManager->persist($adventureTranslation);

        $this->entityManager->flush();

        return TranslatedAdventure::create($adventure, $adventureTranslation);
    }
}