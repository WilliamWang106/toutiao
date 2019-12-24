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
      <div class="articleItem" v-for="item in 1000" :key='item'>
          <div class="left">
              <img src="../../assets/img/toutiao.png" alt="">
              <div class="info">
                <span>有没有人测试过标题最长可以多长？？？？？</span>
                <el-tag class="tag">标签一</el-tag>
                <span class="date">2019-12-24 20:07:57</span>
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
      channels: []
    }
  },
  methods: {
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
