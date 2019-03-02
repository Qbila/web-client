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
              Reset Password
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

export default {
  components: {
    BodyVerticalScroll,
    HeaderGuest,
    MainLayout
  }
}
</script>
