import { zhHans, zhHant, en, ja, ko, es } from '../locales/index'

export default {
  computed: {
    $idearLocales () {
      const idearLocales = this.$themeLocaleConfig.idearLocales || {}

      if (/^zh\-(CN|SG)$/.test(this.$lang)) {
        return { ...zhHans, ...idearLocales }
      }
      if (/^zh\-(HK|MO|TW)$/.test(this.$lang)) {
        return { ...zhHant, ...idearLocales }
      }
      if (/^ja\-JP$/.test(this.$lang)) {
        return { ...ja, ...idearLocales }
      }
      if (/^ko\-KR$/.test(this.$lang)) {
        return { ...ko, ...idearLocales }
      }
      if (/^es(\-[A-Z]+)?$/.test(this.$lang)) {
        return { ...es, ...idearLocales }
      }
      return { ...en, ...idearLocales }
    }
  }
}
