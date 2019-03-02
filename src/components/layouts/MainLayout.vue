<template>
  <div class="layout">
    <div class="layout__header">
      <el-header>
        <slot name="header"></slot>
      </el-header>
    </div>
    <el-container>
      <el-main>
        <slot name="body"></slot>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// import HeaderGuest from './headers/Guest'
// import BodyVerticalScroll from './body/VerticalScroll'

export default {
  components: {}
}
</script>
