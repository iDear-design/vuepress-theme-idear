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
        { iconClass: 'iu-faq', iconName: 'FAQ' },
        { iconClass: 'iu-sticky', iconName: '置顶' },
        { iconClass: 'iu-lock', iconName: '加密' },
        { iconClass: 'iu-mail', iconName: 'Email' },
        { iconClass: 'iu-douban', iconName: '豆瓣' },
        { iconClass: 'iu-wechat', iconName: '微信' },
        { iconClass: 'iu-color', iconName: '颜色板' },
        { iconClass: 'iu-sf', iconName: '思否' },
        { iconClass: 'iu-message', iconName: '消息' },
        { iconClass: 'iu-eye', iconName: '眼睛' },
        { iconClass: 'iu-search', iconName: '搜索' },
        { iconClass: 'iu-category', iconName: '分类' },
        { iconClass: 'iu-npm', iconName: 'NPM' },
        { iconClass: 'iu-menu', iconName: '菜单' },
        { iconClass: 'iu-suggestion', iconName: '建议' },
        { iconClass: 'iu-coding', iconName: 'Coding' },
        { iconClass: 'iu-github', iconName: 'GitHub' },
        { iconClass: 'iu-other', iconName: '其他' },
        { iconClass: 'iu-home', iconName: '首页' },
        { iconClass: 'iu-document', iconName: '文档' },
        { iconClass: 'iu-huawei', iconName: '华为' },
        { iconClass: 'iu-up', iconName: '回到顶部' },
        { iconClass: 'iu-weibo', iconName: '微博' },
        { iconClass: 'iu-tag', iconName: '标签' },
        { iconClass: 'iu-date', iconName: '日期' },
        { iconClass: 'iu-bokeyuan', iconName: '博客园' },
        { iconClass: 'iu-beian', iconName: '备案' },
        { iconClass: 'iu-copyright', iconName: '版权' },
        { iconClass: 'iu-bilibili', iconName: '哔哩哔哩' },
        { iconClass: 'iu-account', iconName: '账号' },
        { iconClass: 'iu-jianshu', iconName: '简书' },
        { iconClass: 'iu-qq', iconName: 'QQ' },
        { iconClass: 'iu-theme', iconName: '主题' },
        { iconClass: 'iu-three', iconName: '三' },
        { iconClass: 'iu-gitlab', iconName: 'GitLab' },
        { iconClass: 'iu-blog', iconName: '博客' },
        { iconClass: 'iu-mayun', iconName: '码云' },
        { iconClass: 'iu-zhihu', iconName: '知乎' },
        { iconClass: 'iu-facebook', iconName: 'Facebook' },
        { iconClass: 'iu-taobao', iconName: '淘宝' },
        { iconClass: 'iu-tongzhi', iconName: '通知' },
        { iconClass: 'iu-douyin', iconName: '抖音' },
        { iconClass: 'iu-v2ex', iconName: 'V2EX' },
        { iconClass: 'iu-toutiao', iconName: '今日头条' },
        { iconClass: 'iu-linkedin', iconName: '领英' },
        { iconClass: 'iu-twitter', iconName: 'Twitter' },
        { iconClass: 'iu-api', iconName: 'API' },
        { iconClass: 'iu-csdn', iconName: 'CSDN' },
        { iconClass: 'iu-juejin', iconName: '掘金' }
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
