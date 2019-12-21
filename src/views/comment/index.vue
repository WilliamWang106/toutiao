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
    <el-table :data='list'>
      <el-table-column prop='title' label='标题' width='600'></el-table-column>
      <el-table-column prop='comment_status' :formatter="commentBealoon" label='评论状态'></el-table-column>
      <el-table-column prop='total_comment_count' label='总评论数'></el-table-column>
      <el-table-column prop='fans_comment_count' label='粉丝评论数'></el-table-column>
      <el-table-column label='操作'>
        <template slot-scope="obj">
          <el-button size="small" type="text">修改</el-button>
          <el-button size="small" type="text">{{obj.row.comment_status ? '关闭' : '打开'}}评论</el-button>
        </template>

      </el-table-column>
    </el-table>

  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    getComment () {
      this.$axios({
        url: '/articles',
        params: { response_type: 'comment' }
      }).then(res => {
        this.list = res.data.results
      })
    },
    commentBealoon (row, column, cellValue, index) {
      return cellValue ? '正常' : '关闭'
    }
  },
  created () {
    this.getComment()
  }

}
</script>

<style>

</style>
