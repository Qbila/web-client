<template>
  <main-layout>
    <div slot="header">
      <header-guest></header-guest>
    </div>
    <div slot="body">
      <body-vertical-scroll>
        <div slot="content">
          <el-row :gutter="15">
            <el-col :span="12">hello</el-col>
            <el-col :span="12">
              <login-form-vertical></login-form-vertical>
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

export default {
  name: 'home',
  components: {
    BodyVerticalScroll,
    HeaderGuest,
    MainLayout,
    LoginFormVertical
  }
}
</script>
