<template>
  <div class="login-form">
    <el-row>
      <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="120px" class="login-form--vertical">
        <el-form-item label="Email" prop="name">
          <el-input
            v-model="loginForm.email"
            placeholder="your.email@example.com"
          ></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            placeholder="Password"
          ></el-input>
        </el-form-item>
      </el-form>
    </el-row>
    <el-row>
      <el-button @click="resetForm('loginForm')">Reset</el-button>
      <el-button type="primary" @click="submitForm('loginForm')">Login</el-button>
    </el-row>
    <el-row>
      <el-col :span="12">
        <a href="/auth/forgot-password">Forgot Password?</a>
      </el-col>
      <el-col :span="12">
        <a href="">New User? SignUp</a>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loginForm: {
        email: '',
        password: ''
      },
      rules: {
        name: [
          { required: true, message: 'Please enter your email address', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please enter your password', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style>
  .login-form {
    padding: 20px;
  }
</style>
