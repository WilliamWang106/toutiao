// 专门用来处理路由拦截器   导航守卫---基于vue-router 的一个功能
// 路由发生改变，其函数就会被调用
import router from '../router'

router.beforeEach((to, from, next) => {
  // 判断范围
//   console.log(to.path)
  if (to.path.startsWith('/home')) {
    // 判断是否存在
    let token5 = window.localStorage.getItem('user-token')
    if (token5) {
      next()
    } else {
    //   next('/login')
      next('/login')
    }
  } else {
    next()
  }
})
