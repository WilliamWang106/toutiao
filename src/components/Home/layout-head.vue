<template>
  <el-row class="layout-head" type="flex" align="middle">
    <el-col class="left" :span="12">
      <i class="el-icon-s-unfold"></i>
      <span>江苏传智播客教育科技股份有限公司</span>
    </el-col>
    <el-col class="right" :span="12">
      <el-row type="flex" justify="end" align="middle">
          <img src="../../assets/img/icons.png" alt="">
          <el-dropdown>
              <!-- 匿名插槽 -->
              <span>用户名</span>
              <!-- 具名插槽 -->
              <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>用户信息</el-dropdown-item>
                  <el-dropdown-item>git地址</el-dropdown-item>
                  <el-dropdown-item>退出 </el-dropdown-item>
              </el-dropdown-menu>
          </el-dropdown>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {}
</script>

<style lang='less' scoped>
.layout-head{
    height: 60px;
    .left{
        font-size: 20px;
        span{
            font-size: 16px;
            margin-left: 4px;
        }
    }
    .right{
        img{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 5px;
        }
    }
}
</style>
