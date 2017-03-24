<template>
  <div>
    <h2>{{ $store.state.User.login.name }}</h2>
    <div>欢迎您！</div>
    <el-button type="primary" size="small" @click="logout">退出登录</el-button>
    <el-button type="primary" size="small" @click="dialogVisible = true">历史记录</el-button>
    <el-button type="primary" size="small" @click="loginVisible = true">登录</el-button>
    <el-button type="primary" @click="openFullScreen" v-loading.fullscreen.lock="fullscreenLoading">loading</el-button>
    <el-dialog title="历史记录" v-model="dialogVisible" size="large">
      <history></history>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog class="zz-login" v-model="loginVisible">
      <login></login>
    </el-dialog>
  </div>
</template>

<script>
  import history from './history.vue'
  import login from '../login.vue'
  export default {
    data() {
      return {
        dialogVisible: false,
        loginVisible: false,
        fullscreenLoading: false,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    components: {
      'history': history,
      'login': login
    },
    created: function () {
      this.$notify.info({
        title: '欢迎',
        message: '您已经访问过网站'+this.$store.state.User.login.nums+'次',
        duration: 2000
      });
    },
    methods: {
      openFullScreen() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 3000);
      },
      logout() {
        this.$store.dispatch('user_logout');
      }
    }
  }
</script>

<style lang="less">
  .zz-login{
    .el-dialog{
      width:620px;
      background-color: transparent;
      box-shadow: none;
    }
    .el-dialog__header{
      position: absolute;
      top: 20px;
      right: 10px;
    }
    .el-dialog__body{
    }
    .login-card{
      margin:0;
    }
  }
</style>