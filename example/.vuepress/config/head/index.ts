const path = require('path')
module.exports = [
  [
    '@vuepress/pwa',
    {
      serviceWorker: true,
      updatePopup: {
        message: "发现新内容可用",
        buttonText: "刷新"
      }
    }
  ],
  [
    '@vuepress/google-analytics',
    {
      ga: 'UA-149716079-2'
    }
  ],
  [
    '@vuepress/plugin-register-components',
    {
      components: [
        {
          name: 'ido-home-page-one',
          path: path.resolve(__dirname, './components/HomePageOne.vue')
        }
      ],
      componentsDir: path.resolve(__dirname, './demo')
    }
  ],
  '@ido-design/extract-code',
  'flowchart',
  ['sitemap', {
    hostname: 'https://ido-design.maxiaoqu.com/vuepress-theme-ido'
  }],
  require('./plugins/notification/index')
]
