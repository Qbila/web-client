<template>
  <div class="signup-form">
    <el-row>
      <el-form :model="signupForm" :rules="rules" ref="signupForm" label-width="120px" class="login-form--vertical" label-position="top">
        <el-form-item label="Email" prop="email">
          <el-input
            v-model="signupForm.email"
            placeholder="your.email@example.com"
          ></el-input>
        </el-form-item>
        <el-form-item label="Name" prop="name">
          <el-input
            v-model="signupForm.email"
            placeholder="your.email@example.com"
          ></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input
            v-model="signupForm.password"
            type="password"
            placeholder="Password"
          ></el-input>
        </el-form-item>
        <el-form-item label="Confirm Password" prop="confirmPassword">
          <el-input
            v-model="signupForm.comfirmPassword"
            type="password"
            placeholder="Confirm Password"
          ></el-input>
        </el-form-item>
      </el-form>
    </el-row>
    <el-row>
      <el-button @click="resetForm('signupForm')">Reset</el-button>
      <el-button type="primary" @click="submitForm('signupForm')">Signup</el-button>
    </el-row>
  </div>
</template>
<script>
import { isEmail } from '@/services/validators'

export default {
  data () {
    return {
      signupForm: {
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
          { required: true, message: 'Please enter your Email Address', trigger: 'blur' }
        ],
        name: [
          { required: true, message: 'Please enter your Name', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please enter your Password', trigger: 'blur' }
        ],
        confirmPassword: [
          { required: true, message: 'Please enter your Password Again', trigger: 'blur' },
          {
            validator (rule, value, callback) {
              if (value !== rule.dataObject.password) callback(new Error(rule.message))
              else callback()
            },
            required: true,
            message: 'Passwords don\'t match',
            trigger: 'change'
          }
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
