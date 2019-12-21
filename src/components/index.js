import layoutAside from './Home/layout-aside'
import layoutHead from './Home/layout-head'
import breadCrumb from './common/bread-crumb.vue'

export default {
  install (Vue) {
    Vue.component('layout-aside', layoutAside)
    Vue.component('layout-head', layoutHead)
    Vue.component('bread-crumb', breadCrumb)
  }
}
