const themeConfig = require('./config/theme/')
const plugins = require('./config/plugins')

module.exports = {
  dest: 'public',
  base: '/ido-design/',
  head: [
    ['link', {rel: 'icon', href: '/favicon.ico'}],
    ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no'}],
    ['meta', {name: 'author', content: 'maxiaoqu'}],
    ['meta', {name: 'keywords', content: 'vuepress,ido,maxiaoqu,vuepress-ido,vuepress-theme-ido,theme,blog,主题'}],
    ['link', {rel: 'manifest', href: '/manifest.json'}],
    ['meta', {name: 'theme-color', content: '#42b983'}],
    ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
    ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
    ['link', {rel: 'apple-touch-icon', href: '/icon_vuepress_ido.png'}],
    ['link', {rel: 'mask-icon', href: '/icon_vuepress_ido.svg', color: '#42b983'}],
    ['meta', {name: 'msapplication-TileImage', content: '/icon_vuepress_ido.png'}],
    ['meta', {name: 'msapplication-TileColor', content: '#000000'}],
  ],
  theme: require.resolve('../../vuepress-theme-ido'),
  themeConfig,
  locales: {
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      title: "vuepress-theme-ido",
      description: '一款简洁而优雅的 vuepress 博客 & 文档 主题。'
    },
    '/en/': {
      lang: 'en-US',
      title: "vuepress-theme-ido",
      description: 'A simple and beautiful vuepress Blog & Doc theme.'
    }
  },
  markdown: {
    // lineNumbers: true
  },
  plugins: plugins
}
