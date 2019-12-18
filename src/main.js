import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui' // 引入element-ui
import 'element-ui/lib/theme-chalk/index.css' // 引入样式

Vue.config.productionTip = false
Vue.use(ElementUI) // 使用ElementUI

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
