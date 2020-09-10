<template>
  <div id="app">
    <keep-alive>
          <router-view/>
    </keep-alive>
    <div id="nav">
      <MainTabBar v-show="showMainTabBar"/>
    </div>
  </div>
</template>

<script>
import MainTabBar from './components/MainTabBar'
// import axios from 'axios'

export default {
  name: 'App',
  components: {
    MainTabBar
  },
  data () {
    return {
      showMainTabBar: true
    }
  },
  watch: {
    '$route' (to, from) {
      // console.log(to)
      // console.log(from)
      if (to.path === '/home' || to.path === '/cart' || to.path === '/category' || to.path === '/about') {
        this.showMainTabBar = true
      } else {
        this.showMainTabBar = false
      }
    }
  }
//   created () {
//     axios.get('http://open.kiwifruits.cn/public/index.php/api/v1/qtk' + '/baokuan?app_key=OjRY3esp&v=1.0').then(res => console.log(res))
//   }
}
</script>

<style scoped>
  @import url("./assets/css/base.css");
</style>
