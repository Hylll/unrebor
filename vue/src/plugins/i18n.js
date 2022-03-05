import { createI18n } from 'vue-i18n/dist/vue-i18n.esm-bundler.js';
import fr from '@/locales/fr';
import en from '@/locales/en';

const i18n = createI18n({
  locale: 'fr',
  fallbackLocale: 'fr',
  messages: {
    fr,
    en,
  },
});

export default i18n;