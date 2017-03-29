<template>
  <el-card class="box-card login-card">
    <h2 class="login-card-title">登录</h2>
    <el-form label-width="100px" class="demo-ruleForm">
      <el-form-item label="账号">
        <el-input v-model="username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-checkbox v-model="checked">记住我</el-checkbox>
      </el-form-item>
      <el-form-item label="">
        <router-link to="/forget">找回密码</router-link>
        <span class="fr"><router-link to="/register">注册账号</router-link></span>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">提交</el-button>
      </el-form-item>
    </el-form>
  </el-card>
    
</template>
<script>
  import Vue from 'vue'
  export default {
    data() {
      return {
        username: this.$store.state.User.lastUser.username,
        password: this.$store.state.User.lastUser.password,
        checked: true
      }
    },
    methods: {
      submitForm() {
        this.$store.dispatch('userLogin',{
          username: this.username,
          password: this.password
        })
      }
    }
  }
</script>
