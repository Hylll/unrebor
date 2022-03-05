import i18n from './i18n';
import VueScrollTo from 'vue-scrollto';

/**
 *
 * @param {import('vue').App} app
 */
export function registerPlugins(app) {
  app.use(i18n);
  app.use(VueScrollTo, {
    easing: 'ease-out',
  });
}
