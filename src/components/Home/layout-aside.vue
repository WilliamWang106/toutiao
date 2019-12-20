<template>
  <div class="layout-aside">
      <div class="title">
          <img src="../../assets/img/logo_admin.png" alt="">
      </div>
    <el-menu background-color="#353b4e" text-color='#adafb5' active-text-color="#ffd04b">
      <!-- 一级导航栏 没有下拉选项 -->
      <el-menu-item>首页</el-menu-item>
      <!-- 一级导航栏 有下拉选项 -->
      <el-submenu>
        <template slot="title">
          <span>内容管理</span>
        </template>
        <el-menu-item>发布文章</el-menu-item>
        <el-menu-item>文章列表</el-menu-item>
        <el-menu-item>评论管理</el-menu-item>
        <el-menu-item>素材管理</el-menu-item>
      </el-submenu>
      <el-submenu>
        <template slot="title">
          <span>粉丝管理</span>
        </template>
        <el-menu-item>图文数据</el-menu-item>
        <el-menu-item>粉丝概况</el-menu-item>
        <el-menu-item>粉丝画像</el-menu-item>
        <el-menu-item>粉丝列表</el-menu-item>
      </el-submenu>
      <el-menu-item>账户信息</el-menu-item>
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
