<template>
  <main-layout>
    <div slot="header">
      <header-guest></header-guest>
    </div>
    <div slot="body">
      <body-vertical-scroll>
        <div slot="content">
          <el-row :gutter="15">
            <el-col :span="16">
              <div class="description">
                <span style="color: #409EFF; font-weight: bold;">Qbeela</span> helps you stay connected with places live at or care about
                <ul>
                  <li>Follow places you live at or care about</li>
                  <li>Get personalized information from government and social institutions</li>
                  <li>Raise issues that affect you and your community</li>
                  <li>Discuss and act for impact</li>
                  <li>Communicate with authorities</li>
                  <li>Bring change, together</li>
                </ul>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="login-or-signup">
                <div v-if="loginOrSignup === 'login'">
                  <login-form-vertical></login-form-vertical>
                  <el-row class="login-or-signup__alter-links">
                    <el-col :span="12">
                      <el-button type="text" @click="toggleLoginSignup('signup')">New User? SignUp</el-button>
                    </el-col>
                    <!--<el-col :span="12">-->
                      <!--<el-button type="text" @click="$router.push({name: 'forgot-password'})">Forgot Password?</el-button>-->
                    <!--</el-col>-->
                  </el-row>
                </div>
                <div v-if="loginOrSignup === 'signup'">
                  <signup-form-vertical></signup-form-vertical>
                  <el-row class="login-or-signup__alter-links">
                    <el-col>
                      <el-button type="text" @click="toggleLoginSignup('login')">Joined already? Login</el-button>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </body-vertical-scroll>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '@/components/layouts/MainLayout'
import HeaderGuest from '@/components/layouts/headers/Guest'
import BodyVerticalScroll from '@/components/layouts/body/VerticalScroll'

import LoginFormVertical from '@/components/auth/LoginFormVertical'
import SignupFormVertical from '@/components/auth/SignupFormVertical'

export default {
  name: 'home',
  components: {
    BodyVerticalScroll,
    HeaderGuest,
    MainLayout,
    LoginFormVertical,
    SignupFormVertical
  },
  data () {
    return {
      loginOrSignup: 'login'
    }
  },
  methods: {
    toggleLoginSignup (loginOrSignup) {
      this.loginOrSignup = loginOrSignup
    }
  }
}
</script>
<style>
  .description {
    font-size: 20px;
  }
  .login-or-signup__alter-links {
    margin-top: 15px;
  }
  .login-or-signup {
    padding: 20px;
    border: 1px solid #e5e5e5;
    background: #f5f5f5;
    border-radius: 10px;
  }
</style>
