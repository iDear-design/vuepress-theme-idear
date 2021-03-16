<template>
  <div class="footer-wrapper">
    <span>
      <idear-icon icon="idear-theme"/>
      <a target="blank" href="https://vuepress-theme-idear.idearluan.com">{{ `vuepress-theme-idear@${version}` }}</a>
    </span>
    <span v-if="$themeConfig.idearrd">
      <idear-icon icon="idear-beian"/>
      <a :href="$themeConfig.idearrdLink || '#'">{{ $themeConfig.idearrd }}</a>
    </span>
    <span>
      <idear-icon icon="idear-copyright"/>
      <a>
        <span v-if="$themeConfig.author">{{ $themeConfig.author }}</span>
        &nbsp;&nbsp;
        <span v-if="$themeConfig.startYear && $themeConfig.startYear != (new Date().getFullYear())">{{
            $themeConfig.startYear
          }} - </span>
        {{ new Date().getFullYear() }}
      </a>
    </span>
    <span v-show="showAccessNumber">
      <idear-icon icon="idear-eye"/>
      <AccessNumber idVal="/"/>
    </span>
    <p class="cyber-security" v-if="$themeConfig.cyberSecurityRecord">
      <img src="https://img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png" alt="">
      <a :href="$themeConfig.cyberSecurityLink || '#'">{{ $themeConfig.cyberSecurityRecord }}</a>
    </p>
    <Comments :isShowComments="false"/>
  </div>
</template>

<script>
import {defineComponent, computed, getCurrentInstance} from 'vue-demi'
import {IdearIcon} from '@theme/components/IdearCore'
import {version} from '../package.json'

export default defineComponent({
  components: {IdearIcon},
  setup(props, ctx) {
    const instance = getCurrentInstance().proxy
    const showAccessNumber = computed(() => {
      const {
        $themeConfig: {valineConfig},
        $themeLocaleConfig: {valineConfig: valineLocalConfig}
      } = instance

      const vc = valineLocalConfig || valineConfig

      return vc && vc.visitor != false
    })
    return {version, showAccessNumber}
  }
})
</script>

<style lang="stylus" scoped>
.footer-wrapper {
  padding: 1.5rem 2.5rem;
  border-top: 1px solid var(--border-color);
  text-align: center;
  color: lighten($textColor, 25%);
  a {
    font-size 14px
  }
  > span {
    margin-left 1rem
    > i {
      margin-right .5rem
    }
  }
  .cyber-security {
    img {
      margin-right .5rem
      width 20px
      height 20px
      vertical-align middle
    }
    a {
      vertical-align middle
    }
  }
}

@media (max-width: $MQMobile) {
  .footer {
    text-align: left!important;
    > span {
      display block
      margin-left 0
      line-height 2rem
    }
  }
}
</style>
