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
          name: 'iu-home-page-one',
          path: path.resolve(__dirname, '../../components/HomePageOne.vue')
        }
      ],
      componentsDir: path.resolve(__dirname, '../../demo')
    }
  ],
  '@iu-design/extract-code',
  'flowchart',
  ['sitemap', {
    hostname: 'https://iu-design.maxiaoqu.com/vuepress-theme-iu'
  }],
  require('../../plugins/notification/index')
]
