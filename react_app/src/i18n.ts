import i18next from 'i18next'
import { enTranslations } from './localisation/en/common'
import { huTranslations } from './localisation/hu/common'
import { initReactI18next } from 'react-i18next'

i18next
  .use(initReactI18next)
  .init({
    debug: true,
    lng: 'en',
    resources: {
      en: { translation: enTranslations },
      hu: { translation: huTranslations },
    },
    interpolation: { escapeValue: false },
  })
  .then(() => {
    console.log('i18n initialized')
  })
  .catch((error) => {
    console.error('error', error)
  })
