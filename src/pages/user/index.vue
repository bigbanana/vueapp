<template>
  <el-card>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane v-for="item in tabs" :label="item.label" :name="item.path" :key="item.path"></el-tab-pane>
    </el-tabs>
    <transition name="slide-fade" mode="out-in" appear><keep-alive><router-view></router-view></keep-alive></transition>
  </el-card>
</template>

<script>
  import Vue from 'vue'
  import _ from 'lodash'

  export default {
    name: 'user',
    data: function () {
      return {
        tabs: [
          {path:"/user",label:"基本信息"},
          {path:"/user/order",label:"订单列表"},
          {path:"/user/history",label:"历史记录"},
          {path:"/user/settings",label:"设置"},
          {path:"/user/develop",label:"开发"}
        ],
        activeName: this.$route.path
      }
    },
    watch: {
      '$route': function(to){
        var tab = this.tabs.find((item) => {
          return item.path == to.path
        })
        if(tab){
          this.activeName = tab.path
        }
      }
    },
    methods: {
      handleClick (tab,e) {
        this.$router.push(this.activeName)
      }
    }
  }
  
</script>
