<template>
  <div class="datail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :list="detailImg"></detail-swiper>
    <div class="good-info">
      <h1 class="title"><span class="is-tianmao">{{goodsData.is_tmall}}</span>{{goodsData.goods_title}}</h1>
      <div class="row">
        <span class="quanhou">券后价 ￥ <span class="strong">{{goodsData.goods_price - goodsData.coupon_price | round}}</span></span>
        <span class="goods-sales">已售:{{goodsData.goods_sales}}</span>
      </div>
      <div class="row">
        <span class="goods-price">原价{{goodsData.goods_price}}</span>
        <span class="favorite" :class="{'favorited':favorited}" @click="favorited">{{favorited ? '已收藏':'收藏'}}<i class="icon-14"></i></span>
      </div>
      <div class="quan-info">
        <div class="desc">
          <div class="left">
            <div class="wrapper">
              <p class="coupon_price"><span class="strong">{{goodsData.coupon_price | parseInt}}</span>元优惠券</p>
              <p class="date">{{goodsData.coupon_start_time |date}} ~ {{goodsData.coupon_end_time | date}}</p>
            </div>
          </div>
          <div class="right"><span class="text">立即领券</span></div>
        </div>
      </div>
      <div class="goods-introduce">{{goodsData.goods_introduce}}</div>
    </div>
    <detail-bottom-bar @addCart='addToCart'></detail-bottom-bar>
    <!-- <toast :message="message" :show="show"/> -->
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from '../../components/common/swiper/Swiper'
import DetailBottomBar from './childComps/DetailBottomBar'
// import Toast from '../../components/common/toast/Toast'
import { getDetailImg } from '../../network/detail'
import { mapActions } from 'vuex'

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBottomBar
  },
  // 定义属性
  data () {
    return {
      goodsData: {},
      detailImg: [],
      favorited: false
      // message: '',
      // show: false
    }
  },
  created () {
    // this.goodsData = this.$route.params
    // console.log(this.goodsData)
    this.getDetailImg()
  },
  activated () {
    this.goodsData = this.$route.params
    // console.log(this.goodsData)
  },
  filters: {
    round (number) {
      return number.toFixed(1)
    },
    parseInt (number) {
      return parseInt(number)
    },
    date (date) {
      return date.slice(0, 11)
    }
  },
  methods: {
    ...mapActions(['addCart']),
    getDetailImg () {
      console.log(this.goodsData.goods_id)
      getDetailImg(this.goodsData.goods_id).then(res => {
        const data = res.data
        if (data.ret[0] === 'SUCCESS::调用成功') {
          // this.detailImg = data.data.images
          // console.log(data.data.pcDescContent)
          const str = data.data.pcDescContent
          const arr = []
          str.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, function (match, capture) {
            arr.push('http:' + capture)
          })
          this.detailImg = arr
        }
      })
    },
    addToCart () {
      // console.log(this.goodsData)
      const product = {}
      product.id = this.goodsData.goods_id
      product.pic = this.goodsData.goods_pic
      product.price = this.goodsData.goods_price
      product.title = this.goodsData.goods_short_title
      product.introduce = this.goodsData.goods_introduce

      // 将商品添加到购物车里
      // this.$store.dispatch('addCart', product).then(res => {
      //   console.log(res)
      // })
      this.addCart(product).then(res => {
        // this.show = true
        // this.message = res
        // setTimeout(() => {
        //   this.show = false
        //   this.message = ''
        // }, 1500)
        this.$toast.show(res, 2000)
      })
    }
  }
}
</script>

<style scoped>
.detail{
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 99;
  background-color: #fff;
}

.good-info{
  padding: .2rem
}

.title{
  font-size: 1rem;
  line-height: 1.2rem;
}

.row{
  height: 1.2rem;
  line-height: 1.2rem;
  font-size: .8rem;
}

.quanhou{
  color:#FC436D;
}

.strong{
  font-size: .8rem;
  font-weight: 700;
}

.goods-sales{
  float: right;
}

.goods-price{
  text-decoration: line-through;
  color: #888;
}

.favorite{
  float: right;
}

.quan-info{
  width: 100%;
  background: url('./goods_quan.png') no-repeat;
  background-size: auto 100%;
  height: 0;
  padding-bottom: 23.897%;
  position: relative;
  z-index: 50;
}

.desc{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
}

.left{
  flex: 7;
  padding: .4rem 0 .4rem .3rem
}

.wrapper{
  position: relative;
  height: 100%;
  border-right: 1px dotted #fff;
  color: #fff;
}

.coupon_price{
  width: 100%;
  font-size: .8rem;
  position: absolute;
  top: 0;
  text-align: center;
  font-weight: 700;
}

.coupon_price .strong{
  font-size: 1rem;
  margin-right: .1rem;
}

.date{
  width: 100%;
  position: absolute;
  bottom: 0;
  font-size: .7rem;
  text-align: center;
}

.right{
  position: relative;
  flex: 4;
  padding: .4rem 0
}

.right .text{
  position: absolute;
  width: 100%;
  text-align: center;
  top: 50%;
  color: #fff;
  font-size: .8rem;
  margin-top: -0.5rem;
}

.goods-introduce{
  color: #888888;
  font-size: .6rem;
  line-height: .7rem;
}
</style>
