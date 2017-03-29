<template>
  <section>
    <la-header></la-header>
    <la-li-menu></la-li-menu>
    <section class="search-result">
      <el-card>
        <el-button type="primary" size="small" @click="showOrderDialog = true">列排序</el-button>
      </el-card>
      <el-card class="offset-top">
        <el-table
        :data="result"
        :default-sort = "{prop: 'date', order: 'descending'}"
        v-loading="loading"
        style="width: 100%" class="offset-top" ref="table">
          <el-table-column
            v-for="item in tableHead"
            :prop="item.prop"
            :label="item.label"
            :width="item.width"
            sortable
            :key="item.prop">
            <template scope="scope">
              <div v-if="item.prop === 'name'">
                <router-link to="/detail">{{ scope.row.name }}</router-link>
              </div>
              <div v-if="item.prop === 'address'">
                <div>时间：{{ scope.row.date }}</div>
                <div>地址：{{ scope.row.address }}</div>
              </div>
              <div v-if="item.prop === 'handles'">
                <el-button type="primary" size="mini">删除</el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </section>
    <el-dialog class="order-dialog" v-model="showOrderDialog">
      <ul class="order-change-list">
        <li v-for="(item, index) in tableHead" :key="item.prop">
          <span>{{ item.label }}</span>
          <el-button v-if="index != tableHead.length-1" type="primary" size="mini" @click="orderChangeDown(index)"><i class="el-icon-caret-bottom"></i></el-button>
          <el-button v-if="index != 0" type="primary" size="mini" @click="orderChangeUp(index)"><i class="el-icon-caret-top"></i></el-button>
        </li>
      </ul>
    </el-dialog>
  </section>
</template>

<script>
  import Vue from 'vue'
  import { mapState } from 'vuex'
  import laLiMenu from './menu.vue'

  const defaultHead = [
    {prop:"name",label:"姓名",width:180},
    {prop:"address",label:"详细信息",width:null},
    {prop:"handles",label:"操作",width:180}
  ]
  export default {
    data() {
      return {
        showOrderDialog: false,
        tableHead: defaultHead
      }
    },
    created () {
      this.$store.dispatch('searchInit')
    },
    beforeRouteUpdate (to, from ,next) {
      next()
      this.$store.dispatch('searchInit')
    },
    computed: {
      ...mapState({
        loading: state => state.Search.loading,
        result: state => state.Search.result
      })
    },
    components: { laLiMenu },
    methods: {
      sort () {
        var that = this
        this.tableHead = []
        Vue.nextTick(function(){
          that.tableHead = _.sampleSize(defaultHead,3)
          console.log(JSON.stringify(that.tableHead))
        })
      },
      orderChangeDown (index) {
        var item = defaultHead.splice(index,1)[0]
        defaultHead.splice(index+1,0,item)
        this.tableHead = []
        Vue.nextTick(() => {
          this.tableHead = defaultHead
        })
      },
      orderChangeUp (index) {
        var item = defaultHead.splice(index,1)[0]
        defaultHead.splice(index-1,0,item)
        this.tableHead = []
        Vue.nextTick(() => {
          this.tableHead = defaultHead
        })
      }
    }
  }
</script>

<style lang="less">
  .search-params{
    float: left;
    width: 200px;
  }
  .search-result{
    margin-left: 200px+16px;
  }
  .order-change-list{
    list-style-type: none;
    li{
      padding: 4px 8px;
    }
  }
</style>
