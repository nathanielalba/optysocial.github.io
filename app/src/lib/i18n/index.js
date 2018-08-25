import VueI18n from 'vue-i18n'

// locale import
import translations from './translations'

const i18n = new VueI18n({
  locale: 'en',
  messages: translations,
})

export default i18n
