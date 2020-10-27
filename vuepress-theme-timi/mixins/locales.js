import { zhHans, zhHant, en } from '../locales/index'

export default {
  computed: {
    $recoLocales () {
      const recoLocales = this.$themeLocaleConfig.recoLocales || {}

      if (/^zh\-(CN|SG)$/.test(this.$lang)) {
        return { ...zhHans, ...recoLocales }
      }
      if (/^zh\-(HK|MO|TW)$/.test(this.$lang)) {
        return { ...zhHant, ...recoLocales }
      }
      return { ...en, ...recoLocales }
    }
  }
}
