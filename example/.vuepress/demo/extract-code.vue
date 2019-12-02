<template>
  <div class="wrapper">
    My name is {{ name }}.
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '码小趣'
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper {
  color $accentColor
}
</style>


