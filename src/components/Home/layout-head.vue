<template>
  <el-row class="layout-head" type="flex" align="middle">
    <el-col class="left" :span="12">
      <i class="el-icon-s-unfold"></i>
      <span>江苏传智播客教育科技股份有限公司</span>
    </el-col>
    <el-col class="right" :span="12">
      <el-row type="flex" justify="end" align="middle">
          <img :src="userInfo.photo ? userInfo.photo : defaultImg" alt="">
          <!-- 设置默认头像  用三元表达式  如果有头像就显示头像  如果没有头像 将默认头像的地址转换成变量传入 -->
          <el-dropdown @command='clickDrop'>
              <!-- 匿名插槽 -->
              <span>{{userInfo.name}}</span>
              <!-- 具名插槽 -->
              <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command='userInfos'>用户信息</el-dropdown-item>
                  <el-dropdown-item command='git'>git地址</el-dropdown-item>
                  <el-dropdown-item command='lgout'>退出 </el-dropdown-item>
              </el-dropdown-menu>
          </el-dropdown>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {},
      defaultImg: require('../../assets/img/loginImg.jpg') // 将图片引用过来 转换成变量 用require  （图片要做动态转换时）
    }
  },
  // 发送请求 获取数据  没有参数 但是要在头上设置  Bearer加空格加token的值
  // 返回的数据为对象，直接赋值给data中准备好的对象
  created () {
    let token = localStorage.getItem('user-token')
    this.$axios({
      url: '/user/profile',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      this.userInfo = res.data.data
    })
  },
  methods: {
    clickDrop (command) {
      if (command === 'userInfos') {
        // 显示信息
      } else if (command === 'git') {
        window.location.href = 'https://github.com/opendigg/awesome-github-vue'
      } else {
        // 删除令牌
        window.localStorage.removeItem('user-token')
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style lang='less' scoped>
.layout-head{
    height: 60px;
    .left{
        font-size: 20px;
        span{
            font-size: 16px;
            margin-left: 4px;
        }
    }
    .right{
        img{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 5px;
        }
    }
}
</style>
