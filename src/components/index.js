import layoutAside from './Home/layout-aside'
import layoutHead from './Home/layout-head'

export default {
  install (Vue) {
    Vue.component('layout-aside', layoutAside)
    Vue.component('layout-head', layoutHead)
  }
}
