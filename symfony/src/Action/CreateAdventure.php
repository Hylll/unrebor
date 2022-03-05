<?php

declare(strict_types=1);

namespace App\Action;

class CreateAdventure
{
    private string $lang;
    private string $name;

    public function __construct(string $lang, string $name)
    {
        $this->lang = $lang;
        $this->name = $name;
    }

    public function getLang(): string
    {
        return $this->lang;
    }

    public function getName(): string
    {
        return $this->name;
    }
}