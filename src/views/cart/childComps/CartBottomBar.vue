<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button
        :is-checked="isSelectAll"
        class="check-button"
        @click.native="checkClick"/>
      <span>全选</span>
    </div>
    <div class="price">
      合计: {{totalPrice}}
    </div>
    <div class="calculate" @click="calcClick">
      去计算: {{checkLength}}
    </div>
  </div>
</template>

<script>
import CheckButton from '../../../components/content/checkButton/CheckButton'
export default {
  name: 'CartBottomBar',
  components: {
    CheckButton
  },
  data () {
    return {
    }
  },
  computed: {
    totalPrice () {
      return '￥' + this.$store.state.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2)
    },
    checkLength () {
      return this.$store.state.cartList.filter(item => item.checked).length
    },
    isSelectAll () {
      // return !(this.$store.state.cartList.filter(item => !item.checked).length)
      return !(this.$store.state.cartList.find(item => !item.checked))
    }
  },
  methods: {
    checkClick () {
      if (this.isSelectAll) {
        this.$store.state.cartList.forEach(item => {
          item.checked = false
        })
      } else {
        this.$store.state.cartList.forEach(item => {
          item.checked = true
        })
      }
    },
    calcClick () {
      if (!this.isSelectAll) {
        this.$toast.show('请选择购买的商品', 2000)
      }
    }
  }
}
</script>

<style scoped>
  .bottom-bar {
    height: 40px;
    background-color: #eee;
    position: absolute;
    line-height: 40px;
    right: 0;
    left: 0;
    bottom: 49px;
    display: flex;
  }

  .check-content{
    width: 80px;
    display: flex;
    align-items: center;
    margin-left: 10px;
  }

  .check-button{
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }

  .price{
    margin-left: 20px;
    flex: 1;
  }

  .calculate{
    width: 90px;
    background-color: #2b72f5;
    color: #fff;
    text-align: center;
  }
</style>
