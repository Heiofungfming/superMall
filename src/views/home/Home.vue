<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">淘宝街</div></nav-bar>
    <nice-title
    :type="1"
    ref="niceTitle"
    class="nice-title"
    v-show="isTabFixed"
    >每日精选</nice-title>
      <scroll class="content" ref="scroll" :probeType="3" @scroll="contentScroll">
        <home-swiper :list="banner" @swiperImageLoad="swiperImageLoad"></home-swiper>
        <recommend-view :recommend="recommend"></recommend-view>
        <nice-title :type="1" ref="niceTitle">每日精选</nice-title>
        <goods-list :goods='goodsList'/>
      </scroll>
      <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import HomeSwiper from '../../components/common/swiper/Swiper'
import { getHomeMultidata, getTop100 } from '../../network/Home'
import RecommendView from './childComps/RecommendView'
import GoodsList from '../../components/common/goods/GoodsList'
import Scroll from '../../components/common/scroll/Scroll'
import NiceTitle from '../../components/common/nicetitle/NiceTitle'
import BackTop from '../../components/content/backTop/BackTop'

export default {
  name: 'Home',
  data () {
    return {
      banner: [],
      recommend: [],
      goodsList: [],
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false
    }
  },
  components: {
    HomeSwiper,
    NavBar,
    RecommendView,
    GoodsList,
    Scroll,
    NiceTitle,
    BackTop
  },
  created () {
    this.getHomeMultidata()
    this.getTop100()
  },
  methods: {
    getHomeMultidata () {
      getHomeMultidata().then(res => {
        // console.log(res)
        this.banner = res.data.banner.list
        // console.log(this.banner)
        this.recommend = res.data.recommend.list
        // console.log(this.recommend)
      })
    },
    getTop100 () {
      getTop100().then(res => {
        console.log(res.data)
        const data = res.data
        if (data.er_code === 10000) {
          this.goodsList = data.data
        }
      })
    },
    backTop () {
      this.$refs.scroll.ScrollTo(0, 0)
    },
    contentScroll (position) {
      // console.log(position)
      this.isShowBackTop = (-position.y) > 1000
      this.isTabFixed = (-position.y) > this.$refs.niceTitle.$el.offsetTop
    },
    swiperImageLoad () {
      // console.log(this.$refs.niceTitle.$el.offsetTop)
      this.tabOffsetTop = this.$refs.niceTitle.$el.offsetTop
    }
  }
}
</script>

<style scoped>
#home{
  position: relative;
  /* padding-top: 44px; */
  height: 100vh;
}

.home-nav{
  background-color:rgb(43, 114, 245);
  color:white;
}

.content{
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

.nice-title{
  position: relative;
  z-index: 9;
}
</style>
