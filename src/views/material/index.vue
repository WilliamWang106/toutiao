<template>
  <el-card v-loading='loadingUpload'>
    <!-- 卡片头部 -->
    <bread-crumb slot="header">
        <template slot="title">素材管理</template>
    </bread-crumb>
    <!-- 卡片主体 -->
    <!-- 上传 -->
    <el-row type="flex" justify="end">
      <el-upload action='' :show-file-list='false' :http-request="uploadImg">
        <el-button size="small" type="primary">上传图片</el-button>
      </el-upload>
    </el-row>
    <!-- tabs图片 -->
    <el-tabs v-model='activeName' @tab-click='changeTab'>
        <el-tab-pane label="全部图片" name="all">
            <!-- 生成页面 -->
            <div class="img-list">
                <el-card class="img-card" v-for="item in list" :key='item.id'>
                    <img :src="item.url" alt="">
                    <el-row class="img-icon">
                        <i @click='collectOrClose(item)' :style="{color: item.is_collected ? 'red':'#000'}" class="el-icon-star-on"></i>
                        <i @click='deleteImg(item)' class="el-icon-delete-solid"></i>
                    </el-row>
                </el-card>
            </div>
        </el-tab-pane>
        <el-tab-pane label="收藏图片" name="collect">
            <!-- 生成页面 -->
            <div class="img-list">
                <el-card class="img-card" v-for="item in list" :key='item.id'>
                    <img :src="item.url" alt="">
                </el-card>
            </div>
        </el-tab-pane>
        <!-- 分页公共组件 -->
        <el-row type="flex" justify="center">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="page.total"
              :page-size='page.pageSize'
              :current-page="page.currentPage"
              @current-change='changePage'>
            </el-pagination>

        </el-row>
        <!-- {{list}} -->
    </el-tabs>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      loadingUpload: false,
      activeName: 'all',
      list: [],
      page: {
        total: 0,
        currentPage: 1,
        pageSize: 8
      }
    }
  },
  methods: {
    // 删除图片
    deleteImg (item) {
      this.$confirm('你确定要删除么').then(() => {
        this.$axios({
          method: 'delete',
          url: `/user/images/${item.id}`
        }).then(() => {
          // 提示
          this.$message({
            type: 'success',
            message: '删除成功'
          })
          // 重新拉去数据
          this.getMaterial()
        })
      })
    },
    // 收藏或取消收藏
    collectOrClose (item) {
      // item.iscollected true ? 取消收藏 ： 收藏
      this.$axios({
        method: 'put',
        url: `/user/images/${item.id}`,
        data: { collect: !item.is_collected } // 取反
      }).then(res => {
        this.getMaterial()
      })
    },
    // 上传图片
    uploadImg (params) {
      this.loadingUpload = true
      let data = new FormData()
      data.append('image', params.file)
      this.$axios({
        url: '/user/images',
        method: 'post',
        data
      }).then(res => {
        this.loadingUpload = false
        this.getMaterial()
      })
    },
    // 分页中切换页面
    changePage (newPage) {
      this.page.currentPage = newPage
      this.getMaterial()
    },
    // tabs 中切换页签
    changeTab () {
      this.page.currentPage = 1
      this.getMaterial()
    },
    getMaterial () {
      this.$axios({
        url: '/user/images',
        params: {
          collect: this.activeName === 'collect',
          page: this.page.currentPage,
          per_page: this.page.pageSize
        }
      }).then(res => {
        this.list = res.data.results
        this.page.total = res.data.total_count
      })
    }
  },
  created () {
    this.getMaterial()
  }

}
</script>

<style lang='less' scoped>
.img-list{
    display: flex;
    // justify-content: center;
    flex-wrap: wrap;
    .img-card{
        width: 200px;
        height: 220px;
        margin: 20px 50px;
        position: relative;
        img{
            width: 100%;
            height:100%;
        }
        .img-icon{
            position: absolute;
            margin-top: 3px;
            left: 0;
            bottom: 0;
            height: 36px;
            width: 100%;
            background-color: #f4f5f6;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 20px;
            i{
              cursor: pointer;
            }
        }
    }
}

</style>
