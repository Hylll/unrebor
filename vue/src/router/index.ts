import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      component: () => import('../views/Home.vue'),
      name: 'Home',
      path: '/',
    },
    {
      component: () => import('../views/Stories.vue'),
      name: 'Stories',
      path: '/stories',
    },
    {
      component: () => import('../components/Stories/Adventure.vue'),
      name: 'Adventure',
      path: '/adventure/:id', // story id
    },
    {
      component: () => import('../components/Stories/Chapter.vue'),
      name: 'Chapter',
      path: '/adventure/:id/:chapter', // chapter number
    },
    {
      component: () => import('../views/Characters.vue'),
      name: 'Characters',
      path: '/characters',
    },
    {
      component: () => import('../views/Lore.vue'),
      name: 'Lore',
      path: '/lore',
    },
    {
      component: () => import('../views/Encyclopedia.vue'),
      name: 'Encyclopedia',
      path: '/encyclopedia',
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
});

export default router
