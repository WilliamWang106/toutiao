<template>
  <el-carousel height='500px' type="card" :interval="5000" arrow="always">
    <el-carousel-item  v-for="item in list" :key="item">
      <img :src="item" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data () {
    return {
      list: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576872162768&di=6199604f81c81f96fc1dc7d688b70ce0&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180619%2Fdec06f35dab34224a9ed766cbeb4ea97.jpeg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576872162767&di=7e5559f3b62f0f2294fdc40e9b100e54&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170601%2Fb9f35bff9a4a4d3fafe735e09a45cff0_th.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576872162766&di=5b72cb688c9ee93cbb0fcc39aad80515&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F060828381f30e924c9c50a6a4b086e061d95f70c.jpg']
    }
  }

}
</script>

<style lang='less' scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>
