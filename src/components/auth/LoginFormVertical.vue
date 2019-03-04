<template>
  <div class="login-form">
    <el-row>
      <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="120px" class="login-form--vertical" label-position="top">
        <el-form-item label="Email" prop="email">
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
  </div>
</template>
<script>
import { isEmail } from '@/services/validators'

export default {
  data () {
    return {
      loginForm: {
        email: '',
        password: ''
      },
      rules: {
        email: [
          {
            validator (rule, value, callback) {
              if (!isEmail(value)) return callback(new Error(rule.message))
              callback()
            },
            required: true,
            message: 'Please provide a valid email address',
            trigger: 'change'
          },
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
          // alert('submit!')
        } else {
          // console.log('error submit!!')
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
  .el-form-item__label {
    font-weight: bold;
    line-height: 1.4 !important;
  }
</style>
