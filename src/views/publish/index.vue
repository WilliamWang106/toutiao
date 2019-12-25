<template>
  <el-card>
      <bread-crumb slot="header">
        <template slot="title">文章发表</template>
      </bread-crumb>
      <!-- 容器 -->
      <el-form style="margin-left:60px">
        <el-form-item label="标题">
          <el-input style="width:60%"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <el-input style="width:60%" type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="封面">
          <el-radio-group v-model="ariticFormdate.cover">
            <!-- 封面类型 -1:自动，0-无图，1-1张，3-3张 -->
            <el-radio :label="1">单图</el-radio>
            <el-radio :label="3">三图</el-radio>
            <el-radio :label="0">无图</el-radio>
            <el-radio :label="2">自动</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="频道">
          <el-select>
            <el-option v-for='item in channels' :key='item.id.toString()'></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">发表</el-button>
          <el-button>存入草稿</el-button>
        </el-form-item>
      </el-form>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      ariticFormdate: {
        cover: 1
      },
      channels: []
    }
  }

}
</script>

<style>

</style>
