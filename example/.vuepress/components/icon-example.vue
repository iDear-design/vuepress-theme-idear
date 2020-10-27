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
        { iconClass: 'timi-faq', iconName: 'FAQ' },
        { iconClass: 'timi-sticky', iconName: '置顶' },
        { iconClass: 'timi-lock', iconName: '加密' },
        { iconClass: 'timi-mail', iconName: 'Email' },
        { iconClass: 'timi-douban', iconName: '豆瓣' },
        { iconClass: 'timi-wechat', iconName: '微信' },
        { iconClass: 'timi-color', iconName: '颜色板' },
        { iconClass: 'timi-sf', iconName: '思否' },
        { iconClass: 'timi-message', iconName: '消息' },
        { iconClass: 'timi-eye', iconName: '眼睛' },
        { iconClass: 'timi-search', iconName: '搜索' },
        { iconClass: 'timi-category', iconName: '分类' },
        { iconClass: 'timi-npm', iconName: 'NPM' },
        { iconClass: 'timi-menu', iconName: '菜单' },
        { iconClass: 'timi-suggestion', iconName: '建议' },
        { iconClass: 'timi-coding', iconName: 'Coding' },
        { iconClass: 'timi-github', iconName: 'GitHub' },
        { iconClass: 'timi-other', iconName: '其他' },
        { iconClass: 'timi-home', iconName: '首页' },
        { iconClass: 'timi-document', iconName: '文档' },
        { iconClass: 'timi-huawei', iconName: '华为' },
        { iconClass: 'timi-up', iconName: '回到顶部' },
        { iconClass: 'timi-weibo', iconName: '微博' },
        { iconClass: 'timi-tag', iconName: '标签' },
        { iconClass: 'timi-date', iconName: '日期' },
        { iconClass: 'timi-bokeyuan', iconName: '博客园' },
        { iconClass: 'timi-beian', iconName: '备案' },
        { iconClass: 'timi-copyright', iconName: '版权' },
        { iconClass: 'timi-bilibili', iconName: '哔哩哔哩' },
        { iconClass: 'timi-account', iconName: '账号' },
        { iconClass: 'timi-jianshu', iconName: '简书' },
        { iconClass: 'timi-qq', iconName: 'QQ' },
        { iconClass: 'timi-theme', iconName: '主题' },
        { iconClass: 'timi-three', iconName: '三' },
        { iconClass: 'timi-gitlab', iconName: 'GitLab' },
        { iconClass: 'timi-blog', iconName: '博客' },
        { iconClass: 'timi-mayun', iconName: '码云' },
        { iconClass: 'timi-zhihu', iconName: '知乎' },
        { iconClass: 'timi-facebook', iconName: 'Facebook' },
        { iconClass: 'timi-taobao', iconName: '淘宝' },
        { iconClass: 'timi-tongzhi', iconName: '通知' },
        { iconClass: 'timi-douyin', iconName: '抖音' },
        { iconClass: 'timi-v2ex', iconName: 'V2EX' },
        { iconClass: 'timi-toutiao', iconName: '今日头条' },
        { iconClass: 'timi-linkedin', iconName: '领英' },
        { iconClass: 'timi-twitter', iconName: 'Twitter' },
        { iconClass: 'timi-api', iconName: 'API' },
        { iconClass: 'timi-csdn', iconName: 'CSDN' },
        { iconClass: 'timi-juejin', iconName: '掘金' }
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
