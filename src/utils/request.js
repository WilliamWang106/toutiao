// 请求拦截  token统一处理
import axios from 'axios'
import VueRouter from 'vue-router'
import { Message } from 'element-ui'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

// 请求拦截器
axios.interceptors.request.use(function (config) {
  let token = window.localStorage.getItem('user-token')
  config.headers.Authorization = `Bearer ${token}`
  return config
})

// 响应拦截器
axios.interceptors.response.use(function (response) {
  // console.log(response)
  return response.data ? response.data : {}
}, function (error) {
  let status = error.response.status
  let message = ''
  // console.log(error)
  switch (status) {
    case 400:
      message = '请求参数错误'
      break
    case 507:
      message = '服务器数据异常'
      break
    case 401:
      window.localStorage.removeItem('user-token')
      VueRouter.push('/login')
      break
    case 403:
      message = '没有设置这条评论选项'
      break

    default:
      break
  }
  Message({ type: 'warning', message })
})
export default axios
