import Vue from 'vue'
import App from './App.vue'
import './permission'
import router from './router'
import ElementUI from 'element-ui' // 引入element-ui
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import './styles/index.less'
import axios from './utils/request'
import components from './components'
// 富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor)

Vue.config.productionTip = false
Vue.use(ElementUI) // 使用ElementUI
Vue.use(components) // 注册component的全局组件

Vue.prototype.$axios = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
