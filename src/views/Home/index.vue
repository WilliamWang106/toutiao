<template>
  <el-container>
    <!-- 侧边栏容器 -->
    <el-aside style="min-height:100vh;width: 200px;background-color:#323745;">
      <layout-aside></layout-aside>
    </el-aside>
    <!-- 右侧 -->
    <el-container>
      <!-- 右侧的上边 -->
      <el-header>
        <layout-head></layout-head>
      </el-header>
      <!-- 右侧的下边容器 -->
      <router-view></router-view>
    </el-container>
  </el-container>
</template>

<script>

export default {

}
</script>

<style>

</style>
