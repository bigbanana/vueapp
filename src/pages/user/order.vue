<template>
  <div>
    <h2>订单列表</h2>
    <div>
      <el-button type="primary" @click="sort">sort</el-button>
    </div>
    <el-table
      :data="tableData"
      v-loading="loading"
      style="width: 100%" class="offset-top">
      <el-table-column
        v-for="item in tableHead"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        :key="item.prop">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import Vue from 'vue'

  const defaultHead = [
    {prop:"date",label:"日期",width:180},
    {prop:"name",label:"姓名",width:180},
    {prop:"address",label:"地址",width:null}
  ]
  export default {
    data() {
      return {
        loading: true,
        tableHead: defaultHead,
        tableData: []
      }
    },
    created: function () {
      this.fetchData()
      this.$notify.info({
        title: '新订单',
        message: '您有未处理的订单，即将过期！',
        duration: 2000
      });
    },
    methods: {
      fetchData () {
        var that = this
        return new Promise((resolve,reject) => {
          setTimeout(()=>{
            Vue.http.get('list.php').then(function({data}){
              that.loading = false
              that.tableData.push(...data.data)
              resolve()
            },function(){
              debugger
            })
          },1000)
        })
      },
      sort () {
        var that = this
        this.tableHead = []
        Vue.nextTick(function(){
          that.tableHead = _.sampleSize(defaultHead,3)
          console.log(JSON.stringify(that.tableHead))
        })
      }
    }
  }
</script>
