<template>
  <section>
    <la-header></la-header>
    <el-card>
      <h2>搜索</h2>
      <div class="tc">
        <el-input class="search-input" v-model="keyword" placeholder="请输入搜索内容"></el-input>
        <el-button type="primary" @click="doSearch">搜 索</el-button>
      </div>
    </el-card>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        keyword: ''
      }
    },
    methods: {
      doSearch: function () {
        this.$router.push({
          path: '/list',
          query: {
            keyword: this.keyword,
            tType: [1,3]
          }
        })
      }
    }
  }
</script>

<style lang="less">
  .search-input{
    width:400px;
  }
</style>