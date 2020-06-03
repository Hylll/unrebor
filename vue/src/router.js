import Vue from 'vue';
import Router from 'vue-router';
import i18n from '@/plugins/i18n';

// Views
import Home from '@/views/Home';
import Stories from '@/views/Stories';
import Characters from '@/views/Characters';
import Lore from '@/views/Lore';
import Encyclopedia from '@/views/Encyclopedia';

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
          component: Home,
          path: '',
        },
        {
          component: Stories,
          path: 'stories',
        },
        {
          component: Characters,
          path: 'characters',
        },
        {
          component: Lore,
          path: 'lore',
        },
        {
          component: Encyclopedia,
          path: 'encyclopedia',
        },
      ],
    },
  ]
});
