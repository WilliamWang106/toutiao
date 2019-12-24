<template>
  <el-card>
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
          {{searchForm.dateRange}}
      </el-form>
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

</style>
