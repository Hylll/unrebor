<?php

declare(strict_types=1);

namespace App\Domain\Adventure;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity()
 * @ORM\Table(name="adventures_translations")
 */
class AdventureTranslation
{

    /**
     *
     * @ORM\Id()
     * Many AdventureTranslation have one Adventure.
     * @ORM\ManyToOne(targetEntity="Adventure")
     * @ORM\JoinColumn(name="adventure_id", referencedColumnName="id", onDelete="CASCADE")
     */
    private Adventure $adventure;

    /**
     * @ORM\Id()
     * @ORM\Column(type="string")
     */
    private string $lang;

    /**
     * @ORM\Column(type="string")
     */
    private string $name;

    public function __construct(Adventure $adventure, string $lang, string $name)
    {
        $this->adventure = $adventure;
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