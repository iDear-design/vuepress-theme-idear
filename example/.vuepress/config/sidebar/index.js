module.exports = {
  'zh': Object.assign({}, {
    '/views/1.x/': [
      {
        title: '基础',
        collapsable: false,
        children: [
          '',
          'base/installUse',
          'base/blog',
          'base/frontMatter'
        ]
      },
      {
        title: '进阶',
        collapsable: false,
        children: [
          'config/timeline',
          'config/valine',
          'config/password',
          'config/configJs',
          'config/home',
          'config/notfound',
          'config/mode',
          'config/local',
          'config/codeTheme',
          'config/sidebar'
        ]
      },
      {
        title: '默认主题配置',
        collapsable: false,
        children: [
          'theme/abstract',
          'theme/syntax',
          'theme/customStyleAndScript'
        ]
      },
      {
        title: '其他',
        collapsable: false,
        children: [
          'other/recommend'
        ]
      }
    ],
    '/views/plugins/': [
      {
        title: '插件',
        collapsable: true,
        children: [
          '',
          'backToTop',
          'pagation',
          'screenfull',
          'loadingPage',
          'visibleRecord',
          'comments',
          'extractCode',
          'rss',
          'bgmPlayer'
        ]
      }
    ]
  }),
  'en': Object.assign({}, {
    '/en/views/1.x/': [
      {
        title: 'Basic',
        collapsable: false,
        children: [
          '',
          'base/installUse',
          'base/blog',
          'base/frontMatter'
        ]
      }
    ],
    '/en/views/plugins/': [
      {
        title: 'Plugins',
        collapsable: true,
        children: [
          '',
          'backToTop',
          'pagation',
          'screenfull',
          'loadingPage',
          'visibleRecord',
          'comments',
          'extractCode',
          'rss',
          'bgmPlayer'
        ]
      }
    ]
  })
}
