<?php

declare(strict_types=1);

namespace App\Action;

use App\Repository\AdventureRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Messenger\Handler\MessageHandlerInterface;

class DeleteAdventureHandler implements MessageHandlerInterface
{
    private EntityManagerInterface $entityManager;
    private AdventureRepository $adventureRepository;

    public function __construct(EntityManagerInterface $entityManager, AdventureRepository $adventureRepository)
    {
        $this->entityManager = $entityManager;
        $this->adventureRepository = $adventureRepository;
    }

    public function __invoke(DeleteAdventure $command)
    {
        $adventure = $this->adventureRepository->getAdventure($command->getAdventureId());

        $this->entityManager->remove($adventure);
        $this->entityManager->flush();

        return true;
    }
}