<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll" :probeType="3">
        <cart-list-item v-for="(item, index) in cartList" :key="index" :item-info="item"></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Scroll from '../../../components/common/scroll/Scroll'
import CartListItem from './CartListItem'

export default {
  name: 'CartList',
  components: {
    Scroll,
    CartListItem
  },
  // 定义属性
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  activated () {
    this.refs.scroll.refresh()
  }
}
</script>

<style scoped>
  .cart-list {
    position: absolute;
    /* padding-top: 44px; */
    top: 44px;
    bottom: 89px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
</style>
