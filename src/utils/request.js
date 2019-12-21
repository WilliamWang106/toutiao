// 请求拦截  token统一处理
import axios from 'axios'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

// 请求拦截器
axios.interceptors.request.use(function (config) {
  let token = window.localStorage.getItem('user-token')
  config.headers.Authorization = `Bearer ${token}`
  return config
})

// 响应拦截器
axios.interceptors.response.use(function (response) {
  console.log(response)
  return response.data ? response.data : {}
})
export default axios
