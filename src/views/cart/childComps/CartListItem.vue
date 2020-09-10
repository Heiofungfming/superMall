<template>
  <div id="shop-item">
    <div class="item-selector">
      <check-button :is-checked="itemInfo.checked" @click.native="checkClick"></check-button>
    </div>
    <div class="item-img">
      <img :src="itemInfo.pic" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{itemInfo.title}}</div>
      <div class="item-introduce">{{itemInfo.introduce}}</div>
      <div class="info-bottom">
        <div class="item-price left">￥{{itemInfo.price}}</div>
        <div class="item-count right">×{{itemInfo.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from '../../../components/content/checkButton/CheckButton'
export default {
  name: 'CartLiatItem',
  components: {
    CheckButton
  },
  props: {
    itemInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  // 定义属性
  data () {
    return {
    }
  },
  methods: {
    checkClick () {
      this.itemInfo.checked = !this.itemInfo.checked
    }
  }
}
</script>

<style scoped>
#shop-item{
  width: 100%;
  display: flex;
  padding: 5px;
  font-size: 0;
  border-bottom: 1px solid #ccc;
}

.item-selector{
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-img{
  padding: 5px;
}

.item-img img{
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}

.item-title, .item-introduce{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-info{
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}

.item-info .item-introduce{
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}

.info-bottom{
  margin-top: 12px;
  position: relative;
  bottom: 0px;
  left: 10px;
  right: 10px;
  display: flex;
}

.left{
  flex: 6;
}

.right{
  flex: 1;
}

.info-bottom .item-price{
  color: orangered;
}
</style>
