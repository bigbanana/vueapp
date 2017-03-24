<template>
  <el-card class="box-card login-card">
    <h2 class="login-card-title">找回密码</h2>
    <el-form label-width="100px" class="demo-ruleForm">
      <el-form-item label="邮箱">
        <el-input v-model="email"></el-input>
      </el-form-item>
      <el-form-item label="">
        <router-link to="/login">想起来啦？</router-link>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">提交</el-button>
      </el-form-item>
    </el-form>
  </el-card>
    
</template>
<script>
  export default {
    data() {
      return {
        email: ""
      }
    },
    methods: {
      submitForm() {
        this.$store.dispatch('user_forget',{
          email: this.email,
        })
      }
    }
  }
</script>
