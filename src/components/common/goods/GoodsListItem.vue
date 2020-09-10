<template>
  <div class="goods-item" @click="detail(goodsItem, $event)">
    <div class="icon">
      <img v-lazy="goodsItem.goods_pic" src="" :alt="goodsItem.goods_short_title">
    </div>
    <div class="desc">
        <h1 class="title">{{goodsItem.goods_short_title}}</h1>
      <div class="row-price">
        <div class="goods-price">原价{{goodsItem.goods_price}}</div>
        <div class="goods-sales">已售{{goodsItem.goods_sales}}</div>
      </div>
      <div class="row-coupon">
        <div class="after-coupon">券后{{goodsItem.goods_price-goodsItem.coupon_price | round}}</div>
        <div class="coupon-price">{{goodsItem.coupon_price | parseInt}}元券</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  filters: {
    round (number) {
      return number.toFixed(1)
    },
    parseInt (number) {
      return parseInt(number)
    }
  },
  methods: {
    detail (data, event) {
      // console.log(data)
      if (!event._constructed) {
        return
      }
      this.$router.push({ name: 'Detail', params: data })
      // console.log(event._constructed)
    }
  }
}
</script>

<style scoped>
.goods-item{
  position: relative;
  width: 48%;
  margin-bottom: .5rem;
}

.icon{
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  position: relative;
}

.icon img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 7px;
}

.desc{
  height: 1.6rem;
  padding: 0.2rem;
}

.title{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: .6rem;
  line-height: .6rem;
  font-size: .28rem;
  color: #333333;
  font-weight: 400;
}

.row-price{
  font-size: .20rem;
  color: #888;
  height: .48rem;
  line-height: .48rem;
}

.goods-price{
  float: left;
  text-decoration: line-through;
}

.goods-sales{
  float: right;
  text-align: right;
}

.row-coupon{
  font-size: .28rem;
  color: red;
  height: .64rem;
  line-height: .64rem;
}

.coupon-price{
  width: 50%;
  float: right;
  text-align: right;
}

.after-coupon{
  width: 50%;
  float: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
