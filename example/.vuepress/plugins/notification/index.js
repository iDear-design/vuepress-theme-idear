const { path } = require('@vuepress/shared-utils')

module.exports = (options, context) => ({
  name: '@idear-vuepress/notification',
  enhanceAppFiles: [
    path.resolve(__dirname, './bin/enhanceAppFile.js')
  ],
  globalUIComponents: 'Notification'
})
