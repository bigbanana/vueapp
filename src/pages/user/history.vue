<template>
  <div>
    <h2>历史记录</h2>
    <div>
      <el-button type="primary" @click="sort">sort</el-button>
    </div>
    <hr>
    <div>
      <tableComponent :list="tableData" :heads="tableHead" style="width:100%;"></tableComponent>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import _ from 'lodash'

  /**
   * table组件
   */

  const tdComponent = {
    props: ['text','type'],
    computed: {
      th () {
        return this.type === "th"
      }
    },
    template: [
      '<th v-if="th"><slot></slot></th>',
      '<td v-else><slot></slot></td>'
    ].join('')
  }
  const trComponent = {
    props:['data','heads','type'],
    components: {
      tdc: tdComponent
    },
    template: '<tr><tdc v-for="item in heads" :key="item.value" :type="type" :text="data[item.prop]">{{ data[item.prop] }}</tdc></tr>'
  }
  const tableComponent = {
    props:['list','heads'],
    components: {
      trComponent: trComponent
    },
    computed: {
      headlist () {
        return [_.reduce(this.heads,function(res,item){
          res[item.prop] = item.label
          return res
        },{})]
      }
    },
    template: [
    '<table class="history-table">',
      '<thead>',
        '<trComponent v-for="item in headlist" :key="item.value" :data="item" :heads="heads" type="th"></trComponent>',
      '</thead>',
      '<tbody>',
        '<trComponent v-for="item in list" :key="item.value" :data="item" :heads="heads"></trComponent>',
      '</tbody>',
    '</table>'].join('')
  }

  export default {
    data() {
      return {
        type: '',
        loading: true,
        options: [{
          value: '1',
          label: '黄金糕'
        }, {
          value: '2',
          label: '双皮奶'
        }, {
          value: '3',
          label: '蚵仔煎'
        }, {
          value: '4',
          label: '龙须面'
        }, {
          value: '5',
          label: '北京烤鸭'
        }],
        tableHead: [
          {prop:"date",label:"日期",width:180},
          {prop:"name",label:"姓名",width:180},
          {prop:"address",label:"地址",width:null}
        ],
        tableData: []
      }
    },
    created () {
      this.fetchData()
    },
    components: {
      tableComponent: tableComponent
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
        this.tableHead = _.sampleSize(this.tableHead,3)
      }
    }
  }
</script>

<style lang="less">
  .history-table{
    border-collapse: collapse;
    th,td{
      border:1px solid #faa;
      padding: 4px 10px;
    }
  }
</style>