<template>
  <section class="search-params" v-loading="loading">
    <el-card>
      <div class="li-menu-groups" v-if="tTypeList.length > 0">
        <b>专利技术类型</b>
        <el-checkbox-group v-model="tType">
          <ul>
            <li v-for="item in tTypeList" :key="item.value">
              <el-checkbox :label="item.value" name="tType">{{ item.name }}</el-checkbox>
            </li>
          </ul>
        </el-checkbox-group>
      </div>
      <div class="li-menu-groups" v-if="dateList.length > 0">
        <b>申请日期</b>
        <el-checkbox-group v-model="date">
          <ul>
            <li v-for="item in dateList" :key="item.value">
              <el-checkbox :label="item.value" name="date">{{ item.name }}</el-checkbox>
            </li>
          </ul>
        </el-checkbox-group>
      </div>
      <div class="li-menu-groups" v-if="proposerList.length > 0">
        <b>申请人</b>
        <el-checkbox-group v-model="proposer">
          <ul>
            <li v-for="item in proposerList" :key="item.value">
              <el-checkbox :label="item.value" name="proposer">{{ item.name }}</el-checkbox>
            </li>
          </ul>
        </el-checkbox-group>
      </div>
    </el-card>
  </section>
</template>

<script>
  import _ from 'lodash'
  export default {
    name: 'laLiMenu',
    data () {
      return {
        loading: true,
        tTypeList: [],
        dateList: [],
        proposerList: [],
      }
    },
    created () {
      this.fetchData()
    },
    computed: {
      tType: {
        get () {
          return this.$store.state.Search.tType
        },
        set (value) {
          this.$store.dispatch('searchTType', value)
        }
      },
      date: {
        get () {
          return this.$store.state.Search.date
        },
        set (value) {
          this.$store.dispatch('searchDate', value)
        }
      },
      proposer: {
        get () {
          return this.$store.state.Search.proposer
        },
        set (value) {
          this.$store.dispatch('searchProposer', value)
        }
      }
    },
    watch: {
      "tType": function(){
        //console.log(this.tType)
      }
    },
    methods: {
      fetchData () {
        setTimeout(() => {
          this.tTypeList = [
            {name:'选项1',value:1},
            {name:'选项2',value:2},
            {name:'选项3',value:3}
          ]
          this.dateList = [
            {name:'2010',value:1},
            {name:'2011',value:2},
            {name:'2012',value:3}
          ]
          this.proposerList = [
            {name:'pear',value:1},
            {name:'apple',value:2},
            {name:'orange',value:3}
          ]
          this.loading = false
        },200)
      }
    }
  }
</script>

<style lang="less">
  .li-menu-groups{
    ul{
      padding: 0;margin: 10px 0;
      list-style-type: none;
      li{
        padding:4px 10px;
      }
    }
  }
</style>