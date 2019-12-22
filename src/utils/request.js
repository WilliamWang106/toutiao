// 请求拦截  token统一处理   处理axios的文件
import axios from 'axios'
import VueRouter from 'vue-router'
import { Message } from 'element-ui'
import jsonBigInt from 'json-bigint'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

// 请求拦截器
axios.interceptors.request.use(function (config) {
  let token = window.localStorage.getItem('user-token')
  config.headers.Authorization = `Bearer ${token}`
  return config
})

axios.defaults.transformResponse = [function (data) {
  return jsonBigInt.parse(data)
}]

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
  // 错误执行函数如果不做任何操作   还会进入promis  then中
  return Promise.reject(error)
})
export default axios
