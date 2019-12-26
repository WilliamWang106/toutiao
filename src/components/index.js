import layoutAside from './Home/layout-aside'
import layoutHead from './Home/layout-head'
import breadCrumb from './common/bread-crumb.vue'
import CoverImage from './publish/cover-image.vue'
// 富文本编辑器
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

export default {
  install (Vue) {
    Vue.component('layout-aside', layoutAside)
    Vue.component('layout-head', layoutHead)
    Vue.component('bread-crumb', breadCrumb)
    Vue.component('quill-editor', quillEditor)
    Vue.component('cover-image', CoverImage) // 注册一个封面全局组件
  }
}
