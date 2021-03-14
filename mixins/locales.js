import {zhHans, zhHant, en} from '../locales/index'

export default {
  computed: {
    $idearLocales() {
      const idearLocales = this.$themeLocaleConfig.idearLocales || {}

      if (/^zh\-(CN|SG)$/.test(this.$lang)) {
        return {...zhHans, ...idearLocales}
      }
      if (/^zh\-(HK|MO|TW)$/.test(this.$lang)) {
        return {...zhHant, ...idearLocales}
      }
      return {...en, ...idearLocales}
    }
  }
}
