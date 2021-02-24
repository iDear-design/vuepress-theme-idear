const themeConfig = require('./config/theme/')
const plugins = require('./config/plugins/')
const head = require('./config/head/')

module.exports = {
  dest: 'public',
  base: '/vuepress-theme-idear-doc/',
  dest: './dist',
  port: 1024,
  head: head,
  theme: require.resolve('../../vuepress-theme-idear'),
  // theme: 'timi',
  themeConfig,
  locales: {
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      title: "vuepress-theme-idear",
      description: '一款简洁而优雅的 vuepress 博客 & 文档 主题。'
    },
    '/en/': {
      lang: 'en-US',
      title: "vuepress-theme-idear",
      description: 'A simple and beautiful vuepress Blog & Doc theme.'
    }
  },
  markdown: {
    // lineNumbers: true
  },
  plugins: plugins
}
