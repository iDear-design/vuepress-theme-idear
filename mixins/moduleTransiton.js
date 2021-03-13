export default {
  data () {
    return {
      idearShowModule: false
    }
  },
  mounted () {
    this.idearShowModule = true
  },
  watch: {
    '$route' (newV, oldV) {
      if (newV.path === oldV.path) return

      this.idearShowModule = false

      setTimeout(() => {
        this.idearShowModule = true
      }, 200)
    }
  }
}
