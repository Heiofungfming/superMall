import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import Swiper from 'swiper'
import VueLazyload from 'vue-lazyload'
import 'swiper/swiper-bundle.css'
import './assets/styles/iconfont.css'

import toast from './components/common/toast/index'
// import './assets/styles/border.css'
// import './assets/styles/reset.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(toast)
// Vue.use(Swiper)
Vue.use(VueLazyload, {
  preLoad: 1,
  error: 'http://api.kiwifruits.cn/imgs/Lazyload.png',
  loading: 'http://api.kiwifruits.cn/imgs/Lazyload.png',
  attempt: 1,
  listenEvents: ['scroll', 'mousewheel', 'touchmove']
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
