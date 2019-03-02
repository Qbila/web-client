<template>
  <div class="layout__content-container--vertical-scroll">
    <el-container>
      <el-main>
        <slot name="content"></slot>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  props: {
    heading: {
      type: String,
      default: 'Welcome'
    }
  }
}
</script>
<style lang="postcss" scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
</style>
