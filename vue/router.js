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
          component: () => import(/* webpackChunkName: "home" */ '@/views/Home'),
          path: '',
        },
        {
          component: () => import(/* webpackChunkName: "stories" */ '@/views/Stories'),
          path: 'stories',
        },
        {
          component: () => import(/* webpackChunkName: "characters" */ '@/views/Characters'),
          path: 'characters',
        },
        {
          component: () => import(/* webpackChunkName: "lore" */ '@/views/Lore'),
          path: 'lore',
        },
        {
          component: () => import(/* webpackChunkName: "encyclopedia" */ '@/views/Encyclopedia'),
          path: 'encyclopedia',
        },
      ],
    },
  ],
});
