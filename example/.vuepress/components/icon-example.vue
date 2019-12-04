<template>
  <ul class="icon-wrapper">
    <li v-for="(item, index) in iconArr" :key="index">
      <i :class="`iconfont ${item.iconClass}`"></i>
      <p class="icon-name">{{ item.iconName }}</p>
      <p class="icon-name">{{ item.iconClass }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      iconArr: [
        { iconClass: 'ido-faq', iconName: 'FAQ' },
        { iconClass: 'ido-sticky', iconName: '置顶' },
        { iconClass: 'ido-lock', iconName: '加密' },
        { iconClass: 'ido-mail', iconName: 'Email' },
        { iconClass: 'ido-douban', iconName: '豆瓣' },
        { iconClass: 'ido-wechat', iconName: '微信' },
        { iconClass: 'ido-color', iconName: '颜色板' },
        { iconClass: 'ido-sf', iconName: '思否' },
        { iconClass: 'ido-message', iconName: '消息' },
        { iconClass: 'ido-eye', iconName: '眼睛' },
        { iconClass: 'ido-search', iconName: '搜索' },
        { iconClass: 'ido-category', iconName: '分类' },
        { iconClass: 'ido-npm', iconName: 'NPM' },
        { iconClass: 'ido-menu', iconName: '菜单' },
        { iconClass: 'ido-suggestion', iconName: '建议' },
        { iconClass: 'ido-coding', iconName: 'Coding' },
        { iconClass: 'ido-github', iconName: 'GitHub' },
        { iconClass: 'ido-other', iconName: '其他' },
        { iconClass: 'ido-home', iconName: '首页' },
        { iconClass: 'ido-document', iconName: '文档' },
        { iconClass: 'ido-huawei', iconName: '华为' },
        { iconClass: 'ido-up', iconName: '回到顶部' },
        { iconClass: 'ido-weibo', iconName: '微博' },
        { iconClass: 'ido-tag', iconName: '标签' },
        { iconClass: 'ido-date', iconName: '日期' },
        { iconClass: 'ido-bokeyuan', iconName: '博客园' },
        { iconClass: 'ido-beian', iconName: '备案' },
        { iconClass: 'ido-copyright', iconName: '版权' },
        { iconClass: 'ido-bilibili', iconName: '哔哩哔哩' },
        { iconClass: 'ido-account', iconName: '账号' },
        { iconClass: 'ido-jianshu', iconName: '简书' },
        { iconClass: 'ido-qq', iconName: 'QQ' },
        { iconClass: 'ido-theme', iconName: '主题' },
        { iconClass: 'ido-three', iconName: '三' },
        { iconClass: 'ido-gitlab', iconName: 'GitLab' },
        { iconClass: 'ido-blog', iconName: '博客' },
        { iconClass: 'ido-mayun', iconName: '码云' },
        { iconClass: 'ido-zhihu', iconName: '知乎' },
        { iconClass: 'ido-facebook', iconName: 'Facebook' },
        { iconClass: 'ido-taobao', iconName: '淘宝' },
        { iconClass: 'ido-tongzhi', iconName: '通知' },
        { iconClass: 'ido-douyin', iconName: '抖音' },
        { iconClass: 'ido-v2ex', iconName: 'V2EX' },
        { iconClass: 'ido-toutiao', iconName: '今日头条' },
        { iconClass: 'ido-linkedin', iconName: '领英' },
        { iconClass: 'ido-twitter', iconName: 'Twitter' },
        { iconClass: 'ido-api', iconName: 'API' },
        { iconClass: 'ido-csdn', iconName: 'CSDN' },
        { iconClass: 'ido-juejin', iconName: '掘金' }
      ]
    }
  }
}
</script>


<style lang="stylus" scoped>
.icon-wrapper
  list-style none
  li
    display inline-block
    width 119px
    border-bottom 1px solid var(--border-color)
    text-align center
    .iconfont
      font-size 26px
</style>
