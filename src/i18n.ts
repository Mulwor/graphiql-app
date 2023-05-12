import * as i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

export const i18next = i18n
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    detection: {
      order: ['queryString', 'cookies'],
      caches: ['cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
  })

export const changeLanguage = (language: 'ru' | 'en') => i18n.changeLanguage(language)
