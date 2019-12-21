<template>
<!-- 写一个elementUI的卡片 -->
  <el-card>
    <!-- 头部写面包屑 header -->
    <bread-crumb slot="header">
      <template slot="title">
        评论管理
      </template>
    </bread-crumb>
    <!-- 下面写数据 body el-table表格组件-->
    <el-table>
      <el-table-column label='标题' width='500'></el-table-column>
      <el-table-column label='评论状态'></el-table-column>
      <el-table-column label='总评论数'></el-table-column>
      <el-table-column label='粉丝评论数'></el-table-column>
      <el-table-column label='操作'></el-table-column>
    </el-table>

  </el-card>
</template>

<script>
export default {

}
</script>

<style>

</style>
