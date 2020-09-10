<template>
  <div id="HelloWorld">
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="../assets/image/tabbar/computer.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="../assets/image/tabbar/category.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="../assets/image/tabbar/cart.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/about">
        <img slot="item-icon" src="../assets/image/tabbar/account.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from './tabbar/TabBar'
import TabBarItem from './tabbar/TabBarItem'
export default {
  name: 'HelloWorld',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>
<style scoped>
</style>
