<template>
<div class="cover-image">
  <div @click="openDialog" v-for="(item,index) in list" :key='index' class="cover-image-item">
      <img :src="item ? item : defaultImg" alt="">
  </div>
  <!-- 放置一个弹窗 -->
  <el-dialog :visible="dialogVisible" title="选择封面图片" @close='closeDialog'></el-dialog>
</div>
</template>

<script>
export default {
  props: ['list'],
  data () {
    return {
      defaultImg: require('../../assets/img/pic_bg.png'),
      dialogVisible: false
    }
  },
  methods: {
    openDialog () {
      this.dialogVisible = true
    },
    closeDialog () {
      this.dialogVisible = false
    }
  }

}
</script>

<style lang='less' scoped>
.cover-image{
    margin:20px 50px;
    display: flex;
    .cover-image-item{
        border: 1px solid #ccc;
        width: 250px;
        height: 250px;
        img{
            width:100%;
            height:100%;
        }

    }
}

</style>
