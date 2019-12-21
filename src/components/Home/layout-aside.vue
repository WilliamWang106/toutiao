<template>
  <div class="layout-aside">
      <div class="title">
          <img src="../../assets/img/logo_admin.png" alt="">
      </div>
      <!-- 加router  开启路由  通过index设置路由跳转以及  选择 -->
    <el-menu router background-color="#353b4e" text-color='#adafb5' active-text-color="#ffd04b">
      <!-- 一级导航栏 没有下拉选项 -->
      <el-menu-item index='/Home'>首页</el-menu-item>
      <!-- 一级导航栏 有下拉选项 -->
      <el-submenu index='1'>
        <template slot="title">
          <span>内容管理</span>
        </template>
        <el-menu-item index='/home/publish'>发布文章</el-menu-item>
        <el-menu-item index='/home/articles'>文章列表</el-menu-item>
        <el-menu-item index='/home/comment'>评论管理</el-menu-item>
        <el-menu-item index='/home/material'>素材管理</el-menu-item>
      </el-submenu>
      <el-submenu index='2'>
        <template slot="title">
          <span>粉丝管理</span>
        </template>
        <el-menu-item index='/home/picture'>图文数据</el-menu-item>
        <el-menu-item index='/home/fansinfo'>粉丝概况</el-menu-item>
        <el-menu-item index='/home/fanspicture'>粉丝画像</el-menu-item>
        <el-menu-item index='/home/fanslist'>粉丝列表</el-menu-item>
      </el-submenu>
      <el-menu-item index='/home/userinfo'>账户信息</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {}
</script>

<style lang='less' scoped>
.layout-aside{
    width: 200px;
    height: 100vh;
    background-color:  #323745;
    .title{
        background-color: #2e2f32;
        height: 60px;
        line-height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            height: 30px;
        }
    }
    .el-menu{
        border-right: none;
    }
}
</style>
