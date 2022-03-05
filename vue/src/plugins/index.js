import i18n from './i18n';

/**
 *
 * @param {import('vue').App} app
 */
export function registerPlugins(app) {
  app.use(i18n);
}
