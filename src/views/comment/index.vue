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
    <el-table :data='list' v-loading='loading'>
      <el-table-column prop='title' label='标题' width='600'></el-table-column>
      <el-table-column :formatter="commentBealoon" prop="comment_status" label='评论状态'></el-table-column>
      <el-table-column prop='total_comment_count' label='总评论数'></el-table-column>
      <el-table-column prop='fans_comment_count' label='粉丝评论数'></el-table-column>
      <el-table-column label='操作'>
        <template slot-scope="obj">
          <el-button size="small" type="text">修改</el-button>
          <el-button @click='openOrClose(obj.row)' size="small" type="text">{{obj.row.comment_status ? '关闭' : '打开'}}评论</el-button>
        </template>
        <!-- prop='comment_status' -->

      </el-table-column>
    </el-table>
    <el-row type="flex" justify="center" align="middle" style="height:60px">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="page.total"
        :page-size="page.pageSize"
        :current-page="page.currentPage"
        @current-change='changePage'>
      </el-pagination>
    </el-row>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      page: {
        pageSize: 10,
        currentPage: 1,
        total: 0
      },
      loading: false
    }
  },
  methods: {
    // 页面发生改变
    changePage (newPage) {
      this.page.currentPage = newPage
      this.getComment()
    },
    getComment () {
      this.loading = true
      this.$axios({
        url: '/articles',
        params: { response_type: 'comment', page: this.page.currentPage, per_page: this.page.pageSize }
      }).then(res => {
        this.loading = false
        this.list = res.data.results
        this.page.total = res.data.total_count // 总条数
      })
    },
    commentBealoon: function (row, column, cellValue, index) {
      return cellValue ? '正常' : '关闭'
    },
    openOrClose (row) {
      let mess = row.comment_status ? '关闭' : '打开'
      this.$confirm(`你是否确定要${mess}评论么？`, '提示').then(() => {
        this.$axios({
          method: 'put',
          url: '/comments/status',
          params: { article_id: row.id.toString() },
          data: { allow_comment: !row.comment_status }
        }).then(res => {
          this.getComment()
        })
      })
    }
  },
  created () {
    this.getComment()
  }

}
</script>

<style>

</style>
