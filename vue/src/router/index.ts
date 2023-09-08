import { createRouter, createWebHistory, Router } from 'vue-router';

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      component: () => import('@/modules/home/Home.vue'),
      name: 'Home',
      path: '/',
    },
    {
      component: () => import('@/modules/stories/Stories.vue'),
      name: 'Stories',
      path: '/stories',
    },
    {
      component: () => import('@/modules/stories/Adventure.vue'),
      name: 'Adventure',
      path: '/adventure/:id', // story id
    },
    {
      component: () => import('@/modules/stories/Chapter.vue'),
      name: 'Chapter',
      path: '/adventure/:id/:chapter', // chapter number
    },
    {
      component: () => import('@/modules/characters/Characters.vue'),
      name: 'Characters',
      path: '/characters',
    },
    {
      component: () => import('@/modules/lore/Lore.vue'),
      name: 'Lore',
      path: '/lore',
    },
    {
      component: () => import('@/modules/map/Map.vue'),
      name: 'Map',
      path: '/map',
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
