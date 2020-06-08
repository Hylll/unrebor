<?php

declare(strict_types=1);

namespace App\Action;

use Ramsey\Uuid\Uuid;
use Ramsey\Uuid\UuidInterface;

class DeleteAdventure
{
    private UuidInterface $adventureId;

    public function __construct(string $adventureId)
    {
        $this->adventureId = Uuid::fromString($adventureId);
    }

    public function getAdventureId(): UuidInterface
    {
        return $this->adventureId;
    }
}