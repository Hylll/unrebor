import { createI18n } from 'vue-i18n';
import fr from '@/locales/fr';

const i18n = createI18n({
  locale: 'fr',
  fallbackLocale: 'fr',
  messages: {
    fr,
  },
});

export default i18n;