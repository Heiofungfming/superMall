<template>
  <div class="recommend">
    <div v-for="item in recommend" :key="item.id" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div class="recommend-title">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  props: {
    recommend: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .recommend{
    display: flex;
    width: 100%;
    font-size: 18px;
    padding: 15px 0 20px;
    border-bottom: 8px solid #eee
  }

  .recommend-item{
    flex: 1;
    text-align: center;
  }

  .recommend-item img{
    width: 75px;
    height: 75px;
    margin-bottom: 10px;
  }

  .recommend-item a{
    text-decoration: none;
    color: black;
  }

  .recommend-item a:hover{
    color: blue;
  }

  .recommend-item a:visited{
    color: blue;
  }
</style>
