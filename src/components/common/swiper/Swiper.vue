<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <a :href="item.link">
          <img class="swiper-img" :src="item.image" alt="" @load="imageLoad">
        </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      // swiperOptions: {
      //   autoplay: {
      //     disableOnInteraction: false,
      //     delay: 1000
      //   },
      //   speed: 1000,
      //   pagination: {
      //     el: '.swiper-pagination',
      //     clickable: true
      //   },
      //   direction: 'horizontal',
      //   loop: true
      // }
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: 3000,
        speed: 1000,
        preventClicksPropagation: true // 阻止click冒泡。拖动Swiper时阻止click事件。
      }
    }
  },
  // components: {
  //   Swiper,
  //   SwiperSlide
  // },
  // directives: {
  //   swiper: directive
  // },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    },
    showSwiper () {
      return this.list.length
    }
  },
  mounted () {
    // console.log(this.$refs.mySwiper.$swiper)
    // this.swiper = new Swiper(this.$refs.mySwiper, {
    //   autoplay: {
    //     disableOnInteraction: false,
    //     delay: 1000
    //   },
    //   speed: 1000,
    //   pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true
    //   },
    //   direction: 'horizontal',
    //   loop: true
    // })
    console.log('Current Swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  },
  methods: {
    imageLoad () {
      this.$emit('swiperImageLoad')
    }
  }
}
</script>
<style  lang='stylus' scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background:$RedColor
    width: 16px
    border-radius: 4px
  .wrapper
    overflow:hidden
    width:100%
    height:0
    padding-bottom 48%
    background:#eee
    .swiper-img
      width:100%
</style>
