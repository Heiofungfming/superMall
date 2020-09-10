<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    }
  },
  components: {
  },
  // 定义属性
  data () {
    return {
      scroll: null
    }
  },
  methods: {
    ScrollTo (x, y, time = 300) {
      this.scroll.scrollTo(x, y, time)
    },
    refresh () {
      this.scroll.refresh()
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType
    })

    // 监听滚动位置
    this.scroll.on('scroll', (position) => {
      // console.log(position)
      this.$emit('scroll', position)
    })
  }
}
</script>

<style scoped>
</style>
