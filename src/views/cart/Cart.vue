<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <cart-list></cart-list>
    <cart-bottom-bar/>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import CartList from './childComps/Cartlist'
import { mapGetters } from 'vuex'
import CartBottomBar from './childComps/CartBottomBar'

export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    ...mapGetters({
      length: 'cartLength',
      list: 'cartList'
    })
  }
}
</script>

<style scoped>
.cart{
  position: relative;
  height: 100vh;
}

.nav-bar{
  background-color: #2b72f5;
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
}
</style>
