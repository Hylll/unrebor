<?php

declare(strict_types=1);

namespace App\Domain\Adventure;

interface AdventureRepository
{
    public function getAdventuresPage(int $page, int $limit, string $lang): array;
    public function countAdventures(string $lang): int;

    public function getTranslatedAdventure(string $adventureId, string $lang): TranslatedAdventure;
    public function isAdventureAvailableInLang(string $adventureId, string $lang): bool;

    public function getAdventure(string $adventureId): Adventure;

}