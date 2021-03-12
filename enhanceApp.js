/* eslint-disable no-proto */
import postMixin from '@theme/mixins/posts'
import localMixin from '@theme/mixins/locales'
import { addLinkToHead, addScriptToHead } from '@theme/helpers/utils'
import { registerCodeThemeCss, interceptRouterError, fixRouterError404 } from '@theme/helpers/other'
import { install } from 'vue-demi'

export default ({
  Vue,
  siteData,
  isServer,
  router
}) => {
  install(Vue)
  Vue.mixin(postMixin)
  Vue.mixin(localMixin)
  if (!isServer) {
    addScriptToHead('./')
    registerCodeThemeCss(siteData.themeConfig.codeTheme)
  }

  interceptRouterError(router)
  fixRouterError404(router)
}
