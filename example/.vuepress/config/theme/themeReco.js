module.exports = {
  type: 'HomePageOne',
  // logo: '/icon_vuepress_iu.png',
  // 搜索设置
  search: true,
  searchMaxSuggestions: 10,
  // 自动形成侧边导航
  sidebar: 'auto',
  // 最后更新时间
  lastUpdated: 'Last Updated', // string | boolean
  // 作者
  author: '码小趣',
  authorAvatar: '/head.png',
  // 备案号
  // record: '京ICP备17067634号-1',
  // 项目开始时间
  startYear: '2019',
  record: '京ICP备18043732号-1',
  algolia: {
    apiKey: '97357e58cac743c6de62036cb152f18b',
    indexName: 'vuepress-theme-iu'
    // inputSelector: '### REPLACE ME ####',
    // algoliaOptions: { 'facetFilters': ["lang:$LANG"] },
    // debug: false // Set debug to true if you want to inspect the dropdown
  },
  // valine 设置
  valineConfig: {
    appId: 'jvc9s4BkJYQNOcpsbVTPMePe-gzGzoHsz',
    appKey: 'Js91M9DfM9vPwVaUj7xdkbxh',
    placeholder: '填写邮箱可以收到回复提醒哦！',
    verify: true, // 验证码服务
    // notify: true, //
    recordIP: true,
    showComment: false
  },
  // // 假如文档不是放在仓库的根目录下：
  docsDir: 'docs',
  // // 假如文档放在一个特定的分支下：
  docsBranch: 'gh-pages-source',
  // // 默认是 false, 设置为 true 来启用
  editLinks: true,
  mode: 'light',
  codeTheme: 'tomorrow'
}
