<?php

declare(strict_types=1);

namespace App\Controller;

use App\Action\CreateAdventure;
use App\Action\DeleteAdventure;
use App\Repository\AdventureRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Messenger\MessageBusInterface;
use Symfony\Component\Messenger\Stamp\HandledStamp;
use Symfony\Component\Routing\Annotation\Route;

class AdventureController extends AbstractController
{
    private AdventureRepository $adventureRepository;
    private MessageBusInterface $commandBus;

    public function __construct(AdventureRepository $adventureRepository, MessageBusInterface $commandBus)
    {
        $this->adventureRepository = $adventureRepository;
        $this->commandBus = $commandBus;
    }

    /**
     * @Route("/adventures", methods={"GET"}, name="get_adventures")
     */
    public function getAdventures(Request $request) {
        $page = (int) $request->query->get('page', 1);
        $limit = (int) $request->query->get('limit', 25);
        $lang = (string) $request->query->get('lang', 'en');

        $adventures = $this->adventureRepository->getAdventuresPage($page, $limit, $lang);
        $total = $this->adventureRepository->countAdventures($lang);

        $links = [
            'self' => sprintf('/adventures?page=%s&limit=%s&lang=%s', $page, $limit, $lang),
        ];

        if ($page > 1) {
            $links['first'] = sprintf('/adventures?page=%s&limit=%s&lang=%s', 1, $limit, $lang);
            $links['prev'] = sprintf('/adventures?page=%s&limit=%s&lang=%s', $page - 1, $limit, $lang);
        }

        $lastPage = ceil($total / $limit);
        if ($lastPage > $page)
        {
            $links['next'] = sprintf('/adventures?page=%s&limit=%s&lang=%s', $page + 1, $limit, $lang);
            $links['last'] = sprintf('/adventures?page=%s&limit=%s&lang=%s', $lastPage, $limit, $lang);
        }

        return $this->json([
            '_links' => $links,
            'adventures' => $adventures,
            'count' => count($adventures),
            'total' => $total,
        ]);
    }

    /**
     * @Route("/adventures/{adventureId}", methods={"GET"}, name="get_adventure")
     */
    public function getAdventure(Request $request, string $adventureId) {
        $lang = (string) $request->query->get('lang', 'en');

        if ($this->adventureRepository->isAdventureAvailableInLang($adventureId, $lang)) {
            return $this->json($this->adventureRepository->getTranslatedAdventure($adventureId, $lang));
        }

        return new Response('', RESPONSE::HTTP_NOT_FOUND);
    }

    /**
     * @Route("/adventures", methods={"POST"}, name="post_adventure")
     */
    public function postAdventure(Request $request) {
        $body = json_decode($request->getContent(), true);

        $envelope = $this->commandBus->dispatch(new CreateAdventure($body['lang'], $body['name']));

        $adventure = $envelope->last(HandledStamp::class)->getResult();

        return $this->json($adventure, Response::HTTP_OK);
    }

    /**
     * @Route("/adventures/{adventureId}", methods={"DELETE"}, name="delete_adventure")
     */
    public function deleteAdventure(Request $request, string $adventureId) {

        $envelope = $this->commandBus->dispatch(new DeleteAdventure($adventureId));

        $envelope->last(HandledStamp::class)->getResult();

        return new Response('', Response::HTTP_NO_CONTENT);
    }
}
