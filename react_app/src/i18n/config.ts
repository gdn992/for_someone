import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import enNs from './en/enNs.json'
import huNs from './hu/huNs.json'

export const defaultNS = 'hu'

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        ns1: enNs
      },
      hu: {
        ns1: huNs
      }
    },
    defaultNS
  })
  .then(() => {
    console.log('i18n initialized')
  })
  .catch((error) => {
    console.error('error', error)
  })
