<template>
  <el-card>
    <bread-crumb slot="header">
        <template slot="title">素材管理</template>
    </bread-crumb>
    <el-tabs v-model='activeName' @tab-click='changeTab'>
        <el-tab-pane label="全部图片" name="all">
            <!-- 生成页面 -->
            <div class="img-list">
                <el-card class="img-card" v-for="item in list" :key='item.id'>
                    <img :src="item.url" alt="">
                    <el-row class="img-icon">
                        <i class="el-icon-star-on"></i>
                        <i class="el-icon-delete-solid"></i>
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
    changePage (newPage) {
      this.page.currentPage = newPage
      this.getMaterial()
    },
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

            }
        }
    }
}

</style>
