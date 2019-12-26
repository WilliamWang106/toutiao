<template>
  <el-card>
      <bread-crumb slot="header">
        <template slot="title">文章发表</template>
      </bread-crumb>
      <!-- 容器 -->
      <el-form ref="publishForm" :model="formDate" :rules="articleRules" style="margin-left:60px">
        <el-form-item label="标题" prop="title">
          <el-input style="width:60%" placeholder="文章名称" v-model="formDate.title"></el-input>
        </el-form-item>
        <el-form-item label="内容" prop="content">
          <template>
            <div class="edit_container" style="margin-bottom:40px">
              <quill-editor class="futext"
              v-model="formDate.content"
              style="height:300px"></quill-editor>
            </div>
          </template>
        </el-form-item>
        <el-form-item label="封面" prop="cover">
          <el-radio-group v-model="formDate.cover.type">
            <!-- 封面类型 -1:自动，0-无图，1-1张，3-3张 -->
            <el-radio :label="-1">单图</el-radio>
            <el-radio :label="3">三图</el-radio>
            <el-radio :label="0">无图</el-radio>
            <el-radio :label="2">自动</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="频道" prop="channel_id">
          <el-select v-model="formDate.channel_id">
            <el-option v-for='item in channels' :key='item.id.toString()' :label="item.name" :value="item.id.toString()"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item style="margin-left:50px">
          <el-button @click="publishArticle(false)" type="primary">发表</el-button>
          <el-button @click="publishArticle(true)">存入草稿</el-button>
        </el-form-item>
      </el-form>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      channels: '',
      // 表单数据对象
      formDate: {
        title: '',
        content: '',
        cover: {
          type: 0,
          images: []
        },
        channel_id: null
      },
      // 校验规则对象
      articleRules: {
        title: [
          { required: true, message: '文章内容不能为空' },
          { min: 5, max: 30, message: '标题长度要在5-30之间' }],
        content: [
          { required: true, message: '文章内容不能为空' }
        ],
        channel_id: [{ required: true, message: '文章频道不能为空' }]
      }
    }
  },
  methods: {
    // 获取频道信息
    getChannel () {
      this.$axios({
        url: '/channels'
      }).then(res => {
        this.channels = res.data.channels
      })
    },
    publishArticle (draft) {
      this.$refs.publishForm.validate(isOK => {
        if (isOK) {
          // 请求发布文章接口
          this.$axios({
            method: 'post',
            url: '/articles',
            params: { draft },
            data: this.formDate
          }).then(() => {
            // 提示成功 跳转页面
            this.$message({
              type: 'success',
              message: '保存成功'
            })
            this.$router.push('/home/articles')
          })
        }
      })
    }
  },
  created () {
    // 获取频道列表数据
    this.getChannel()
  },
  computed: {
    editor () {
      return this.$refs.myQuillEditor.quill
    }
  }

}
</script>

<style lang='less' scoped>
.futext{
  margin-left: 50px
}

</style>
