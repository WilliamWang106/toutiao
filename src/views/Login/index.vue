<template>
  <div class="loginImg">
    <el-card class="loginBox">
      <div class="logintop"><img class="loginlogo"  src="../../assets/img/logo_index.png" alt=""></div>
      <el-form :model='loginForm' :rules='loginRules' ref="myform">
        <el-form-item prop='mobile'>
          <el-input placeholder='请输入手机号' v-model="loginForm.mobile"></el-input>
        </el-form-item>
        <el-form-item prop='code'>
          <el-input style='width:65%' placeholder='请输入验证码' v-model="loginForm.code"></el-input>
          <el-button style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item prop='check'>
          <el-checkbox v-model="loginForm.check">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button style='width:100%' type="primary" @click="submitLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        mobile: '13911111111',
        code: '246810',
        check: true
      },
      loginRules: {
        mobile: [
          { required: true, message: '请输入手机号' },
          { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机格式' }
        ],
        code: [
          { required: true, message: '请输入验证码' },
          { pattern: /^\d{6}$/, message: '请输入正确的验证码格式' }
        ],
        check: [{ validator: function (rule, value, callback) {
          if (value) {
            callback()
          } else {
            callback(new Error('你必须同意才能登陆'))
          }
        } }]
      }
    }
  },
  methods: {
    submitLogin () {
      this.$refs.myform.validate((isOK) => {
        if (isOK) {
          // 发送请求
          this.$axios({
            url: '/authorizations',
            method: 'post',
            data: this.loginForm
          }).then(res => {
            // console.log(res)
            window.localStorage.setItem('user-token', res.data.token)
            this.$router.push('/home')
          })
          // .catch(() => {
          // })
          // .catch(1() => {
          //   // elementUI提供的  消息提示框的写法
          //   this.$message({
          //     message: '手机号或密码输入错误',
          //     type: 'warning'
          //   })
          // })
        }
      })
    }

  }

}
</script>

<style lang='less' scoped>
.loginImg{
  background-image: url('../../assets/img/loginImg.jpg');
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .loginBox{
    width: 460px;
    height: 350px;
    .logintop{
      text-align: center;
      margin-bottom: 30px;
      .loginlogo{
      height: 42px;
      }
    }
  }
}
</style>
