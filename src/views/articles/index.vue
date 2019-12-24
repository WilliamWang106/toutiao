<template>
  <el-card class="articles">
      <bread-crumb slot="header">
       <!-- style="border-bottom: 1px dashed #ccc" -->
        <template slot="title">全部图文</template>
      </bread-crumb>
      <el-form style="padding-left:50px">
          <!-- 要双向绑定 -->
          <el-form-item label='文章状态：'>
              <el-radio-group v-model="searchForm.status">
                  <!-- 放置一个单选组  文章状态，0-草稿，1-待审核，2-审核通过，3-审核失败，4-已删除，不传为全部-->
                <el-radio :label="5">全部</el-radio>
                <el-radio :label="0">草稿</el-radio>
                <el-radio :label="1">待审核</el-radio>
                <el-radio :label="2">审核通过</el-radio>
                <el-radio :label="3">审核失败</el-radio>
              </el-radio-group>
          </el-form-item>
          <el-form-item label='频道列表：'>
              <el-select placeholder="请输入频道列表" v-model="searchForm.channel_id">
                  <!-- label表示真实的值   value表示id -->
                  <el-option v-for="item in channels" :key='item.id' :label="item.name" :value="item.id"></el-option>
              </el-select>
          </el-form-item>
          <el-form-item label='时间选择：'>
              <el-date-picker type="daterange" v-model="searchForm.dateRange"></el-date-picker>
          </el-form-item>
          <!-- {{searchForm.dateRange}} -->
      </el-form>
      <el-row class="total" type="flex" justify="start" align="middle">
          <span>共找到10000条符合条件的内容</span>
      </el-row>
      <div class="articleItem" v-for="item in list" :key='item.id.toString()'>
          <!-- 大数字类型   要用.toString()  拼接成字符串 -->
          <div class="left">
              <img :src="item.cover.images.length ? item.cover.images[0] : defaultImd" alt="">
              <div class="info">
                <span>{{item.title}}</span>
                <!-- 状态显示的是数字  要把他变成对应的字  可以用过滤器来转变成格式问题 -->
                <!-- 文章状态 0-草稿，1-待审核，2-审核通过，3-审核失败，4-已删除 -->
                <el-tag :type="item.status | filterType" class="tag">{{item.status | filterStatus}}</el-tag>
                <span class="date">{{item.pubdate}}</span>
              </div>
          </div>
          <div class="right">
              <span><i class="el-icon-edit"></i>修改</span>
              <span><i class="el-icon-delete"></i>删除</span>
          </div>
      </div>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      searchForm: {
        status: 5,
        channel_id: null,
        dateRange: []
      },
      channels: [],
      list: [],
      defaultImd: require('../../assets/img/toutiao.png')
    }
  },
  filters: {
    //   参数Value
    filterStatus (value) {
      // 文章状态 0-草稿，1-待审核，2-审核通过，3-审核失败，4-已删除
      // 要return  一个活的值
      switch (value) {
        case 0:
          return '草稿'
        case 1:
          return '待审核'
        case 2:
          return '已发表'
        case 3:
          return '审核失败'
        default:
          break
      }
    },
    filterType (value) {
      switch (value) {
        case 0:
          return 'warning'
        case 1:
          return 'info'
        case 2:
          return ''
        case 3:
          return 'danger'
        default:
          break
      }
    }
  },
  methods: {
    //   获取文章列表数据
    getArticles () {
      this.$axios({
        url: '/articles'
      }).then(res => {
        this.list = res.data.results
      })
    },
    //   获取频道列表数据
    getChannel () {
      this.$axios({
        url: '/channels'
      }).then(res => {
        this.channels = res.data.channels
      })
    }
  },
  created () {
    //   获取频道列表信息
    this.getChannel()
    // 获取文章列表数据
    this.getArticles()
  }

}
</script>

<style lang='less' scoped>
.articles{
    .total{
     height:60px;
     border-bottom: 1px dashed #999;
     margin-bottom: 10px;
    }
    .articleItem{
        display: flex;
        justify-content: space-between;
        margin: 20px;
        border-bottom: 1px solid #f2f3f5;
        .left{
            display: flex;
            img{
            width: 180px;
            height: 100px;
            border-radius: 4px;
            }
            .info{
                display: flex;
                flex-direction: column;
                margin-left: 10px;
                height: 100px;
                justify-content: space-around;
                .date{
                    color: #999;
                    font-size: 12px;
                }
                .tag{
                    width: 60px;
                    text-align: center;
                }
            }

        }
        .right{
            span{
                font-size: 14px;
                margin-right: 8px;
                cursor: pointer;
            }
        }

    }
}

</style>
