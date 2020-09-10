<template>
  <div>
    <nav-bar>
      <div slot="left" class="icon-box" @click="backClick">
        <img src="../../../assets/image/common/back-line.png" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item, index) in titles"
        :key="index"
        class="title-item"
        :class="{active: index === currentIndex}"
        @click="itemClick(index)"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../../components/common/navbar/NavBar'

export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  // 定义属性
  data () {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    itemClick (index) {
      this.currentIndex = index
    },
    backClick () {
      this.$router.back()
    }
  }
}
</script>

<style lang='stylus' scoped>
.title
  display: flex
  font-size: 13px
  .title-item
    flex: 1
.active
  color:blue
.icon-box
  height: 44px
  line-height: 44px
  text-align:center
img
  height:32px
  width:32px
  margin-top:6px
</style>
