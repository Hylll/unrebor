import i18n from './i18n';
import VueScrollTo from 'vue-scrollto';
import { App } from "@vue/runtime-core";

/**
 *
 * @param {import('vue').App} app
 */
export function registerPlugins(app: App) {
  app.use(i18n);
  app.use(VueScrollTo, {
    easing: 'ease-out',
  });
}
