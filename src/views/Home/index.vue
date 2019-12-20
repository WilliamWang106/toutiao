<template>
  <el-container>
    <!-- 侧边栏容器 -->
    <el-aside style="width: 200px">
      <layout-aside></layout-aside>
    </el-aside>
    <!-- 右侧 -->
    <el-container>
      <!-- 右侧的上边 -->
      <el-header>
        <layout-head></layout-head>
      </el-header>
      <!-- 右侧的下边容器 -->
      <el-main>主要</el-main>
    </el-container>
  </el-container>
</template>

<script>
import layoutAside from '../../components/Home/layout-aside'
import layoutHead from '../../components/Home/layout-head'
export default {
  components: {
    'layout-aside': layoutAside,
    'layout-head': layoutHead
  }

}
</script>

<style>

</style>
