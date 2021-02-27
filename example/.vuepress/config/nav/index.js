module.exports = {
  'zh': [
    { text: '文档',
      icon: 'idear-api',
      items: [
        {
          text: '主题', items: [
            { text: '1.x', link: '/views/1.x/' }
          ],
        },
        {
          text: '插件', items: [
            { text: '官方插件', link: '/views/plugins/index.html' },
            { text: '插件广场', link: '/views/home/recommend.html' }
          ]
        }
      ]
    },
    { text: '常见问题', link: '/views/home/question', icon: 'idear-faq' },
    { text: '博客', link: '/categories/blog/', icon: 'idear-blog'},
    { text: '案例', link: '/views/home/theme-example.html', icon: 'idear-category'},
    { text: '留言板', link: '/views/home/messageBoard.html', icon: 'idear-suggestion'},
    { text: 'GitHub', link: 'https://github.com/idear-design/vuepress-theme-idear', icon: 'idear-github'}
  ],
  'en': [
    { text: 'Documents',
      icon: 'idear-api',
      items: [
        {
          text: 'Theme', items: [
            { text: '1.x', link: '/en/views/1.x/' }
          ],
        },
        {
          text: 'Plugin', items: [
            { text: 'plugin', link: '/en/views/plugins/' }
          ]
        }
      ]
    },
    { text: 'FAQ', link: '/en/views/home/question', icon: 'idear-faq' },
    { text: 'Examples', link: '/en/views/home/theme-example.html', icon: 'idear-category'},
    { text: 'GitHub', link: 'https://github.com/idear-design/vuepress-theme-idear', icon: 'idear-github'}
  ]
}
