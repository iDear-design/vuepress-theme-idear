import postMixin from '@theme/mixins/posts'
import localMixin from '@theme/mixins/locales'
import { addLinkToHead } from '@theme/helpers/utils'
import { registerCodeThemeCss } from '@theme/helpers/other'

export default ({
  Vue,
  siteData,
  isServer
}) => {
  Vue.mixin(postMixin)
  Vue.mixin(localMixin)
  if (!isServer) {
    addLinkToHead('//files.maxiaoqu.com/iconfont/font_vuepress_theme_ido/iconfont.css')
    registerCodeThemeCss(siteData.themeConfig.codeTheme)
  }
}
