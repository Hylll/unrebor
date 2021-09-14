import Vue from 'vue';
import Router from 'vue-router';
import i18n from '@/plugins/i18n';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: `/${i18n.locale}/`,
    },
    {
      path: '/:locale',
      component: {
        template: '<router-view/>',
      },
      children: [
        {
          component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
          name: 'Home',
          path: '',
        },
        {
          component: () => import(/* webpackChunkName: "stories" */ '@/views/Stories.vue'),
          name: 'Stories',
          path: 'stories',
        },
        {
          component: () => import(/* webpackChunkName: "adventure" */ '@/components/Stories/Adventure.vue'),
          name: 'Adventure',
          path: 'adventure/:id', // story id
        },
        {
          component: () => import(/* webpackChunkName: "chapter" */ '@/components/Stories/Chapter.vue'),
          name: 'Chapter',
          path: 'adventure/:id/:chapter', // chapter number
        },
        {
          component: () => import(/* webpackChunkName: "characters" */ '@/views/Characters.vue'),
          name: 'Characters',
          path: 'characters',
        },
        {
          component: () => import(/* webpackChunkName: "lore" */ '@/views/Lore.vue'),
          name: 'Lore',
          path: 'lore',
        },
        {
          component: () => import(/* webpackChunkName: "encyclopedia" */ '@/views/Encyclopedia.vue'),
          name: 'Encyclopedia',
          path: 'encyclopedia',
        },
      ],
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
