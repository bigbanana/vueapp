<template>
  <header>
    <el-card>
      <router-link to="/" class="header-link">{{ $store.state.User.login.name }}</router-link>
      <div style="float:right">
        <router-link to="/user" class="header-link">用户中心</router-link>
        <el-button type="primary" size="small" @click="logout">退出登录</el-button>
      </div>
    </el-card>
  </header>
</template>

<script>

  export default {
    name: 'LaHeader',
    data() {
      return {
        input: ''
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('userLogout');
      }
    }
  }
</script>

<style lang="less">
  header{
    margin:16px 0;
    .header-link{
      display: inline-block;
      vertical-align: middle;
      text-decoration: none;
      color: #66f;
    }
  }
</style>