<template>
  <el-card>
    <h2>Vue home page</h2>
    <router-link to="/user" class="zz">用户中心</router-link>
    <div class="block">
      <el-carousel height="150px" style="width:400px;margin:20px auto;">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </el-card>
</template>



<style lang="less">

  .el-carousel__container{
    text-align: center;
    color:#fff;
    display: flex;
  }
  .el-carousel__item h3 {
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #7c97b6;
  }
</style>