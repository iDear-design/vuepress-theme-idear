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
        { iconClass: 'idear-faq', iconName: 'FAQ' },
        { iconClass: 'idear-sticky', iconName: '置顶' },
        { iconClass: 'idear-lock', iconName: '加密' },
        { iconClass: 'idear-mail', iconName: 'Email' },
        { iconClass: 'idear-douban', iconName: '豆瓣' },
        { iconClass: 'idear-wechat', iconName: '微信' },
        { iconClass: 'idear-color', iconName: '颜色板' },
        { iconClass: 'idear-sf', iconName: '思否' },
        { iconClass: 'idear-message', iconName: '消息' },
        { iconClass: 'idear-eye', iconName: '眼睛' },
        { iconClass: 'idear-search', iconName: '搜索' },
        { iconClass: 'idear-category', iconName: '分类' },
        { iconClass: 'idear-npm', iconName: 'NPM' },
        { iconClass: 'idear-menu', iconName: '菜单' },
        { iconClass: 'idear-suggestion', iconName: '建议' },
        { iconClass: 'idear-coding', iconName: 'Coding' },
        { iconClass: 'idear-github', iconName: 'GitHub' },
        { iconClass: 'idear-other', iconName: '其他' },
        { iconClass: 'idear-home', iconName: '首页' },
        { iconClass: 'idear-document', iconName: '文档' },
        { iconClass: 'idear-huawei', iconName: '华为' },
        { iconClass: 'idear-up', iconName: '回到顶部' },
        { iconClass: 'idear-weibo', iconName: '微博' },
        { iconClass: 'idear-tag', iconName: '标签' },
        { iconClass: 'idear-date', iconName: '日期' },
        { iconClass: 'idear-bokeyuan', iconName: '博客园' },
        { iconClass: 'idear-beian', iconName: '备案' },
        { iconClass: 'idear-copyright', iconName: '版权' },
        { iconClass: 'idear-bilibili', iconName: '哔哩哔哩' },
        { iconClass: 'idear-account', iconName: '账号' },
        { iconClass: 'idear-jianshu', iconName: '简书' },
        { iconClass: 'idear-qq', iconName: 'QQ' },
        { iconClass: 'idear-theme', iconName: '主题' },
        { iconClass: 'idear-three', iconName: '三' },
        { iconClass: 'idear-gitlab', iconName: 'GitLab' },
        { iconClass: 'idear-blog', iconName: '博客' },
        { iconClass: 'idear-mayun', iconName: '码云' },
        { iconClass: 'idear-zhihu', iconName: '知乎' },
        { iconClass: 'idear-facebook', iconName: 'Facebook' },
        { iconClass: 'idear-taobao', iconName: '淘宝' },
        { iconClass: 'idear-tongzhi', iconName: '通知' },
        { iconClass: 'idear-douyin', iconName: '抖音' },
        { iconClass: 'idear-v2ex', iconName: 'V2EX' },
        { iconClass: 'idear-toutiao', iconName: '今日头条' },
        { iconClass: 'idear-linkedin', iconName: '领英' },
        { iconClass: 'idear-twitter', iconName: 'Twitter' },
        { iconClass: 'idear-api', iconName: 'API' },
        { iconClass: 'idear-csdn', iconName: 'CSDN' },
        { iconClass: 'idear-juejin', iconName: '掘金' }
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
