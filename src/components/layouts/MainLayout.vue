<template>
  <div class="layout">
    <div class="layout__header">
      <slot name="header"></slot>
    </div>
    <div class="layout__body">
      <slot name="body"></slot>
    </div>
  </div>
</template>
<script>
// import HeaderGuest from './headers/Guest'
// import BodyVerticalScroll from './body/VerticalScroll'

export default {
  components: {}
}
</script>
<style>
  .layout__header {
    height: 60px;
    margin-bottom: 50px;
  }
</style>
