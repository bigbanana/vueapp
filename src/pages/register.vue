<template>
  <el-card class="box-card login-card">
    <h2 class="login-card-title">注册</h2>
    <el-form label-width="100px" :rules="rules" class="demo-ruleForm">
      <el-form-item label="账号">
        <el-input v-model="username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input type="password" v-model="repassword" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="">
        <router-link to="/login">已有账号</router-link>
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
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        username: "",
        password: "",
        repassword: "",
        checked: true,
        rules: {
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          repassword: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm() {
        this.$store.dispatch('user_register',{
          username: this.username,
          password: this.password
        })
      }
    }
  }
</script>
