<template>
  <div class="loginImg">
    <el-card class="loginBox">
      <div class="logintop"><img class="loginlogo"  src="../../assets/img/logo_index.png" alt=""></div>
      <el-form ref='myform'>
        <el-form-item>
          <el-input placeholder='请输入手机号'></el-input>
        </el-form-item>
        <el-form-item>
          <el-input style='width:65%' placeholder='请输入验证码'></el-input>
          <el-button style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item >
          <el-checkbox>我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button style='width:100%' type="primary">登录</el-button>
        </el-form-item>
      </el-form>

    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      myform: {

      }
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
