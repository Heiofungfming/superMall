<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
         <span class="text">客服</span>
      </div>
      <div>
         <span class="text">店铺</span>
      </div>
      <div>
         <span class="text">收费</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购物</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  // 定义属性
  data () {
    return {
    }
  },
  methods: {
    addToCart () {
      this.$emit('addCart')
    }
  }
}
</script>

<style scoped>
.bottom-bar {
  height: 49px;
  background-color: #ffffff;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
}

.bar-item{
  display: flex;
  flex: 1;
}

.bar-item>div {
  flex: 1;
  height: 49px;
  line-height: 49px;
  text-align: center;
}

.text{
  font-size: 12px;
}

.cart{
  background-color: #fb9f64;
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
}

.buy{
  background-color: #fa5bae;
  color: #ffffff;
  font-weight: 500;
}
</style>
