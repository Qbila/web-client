<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import store from './store'

export default {
  /**
   * on creation, app adds event listener to listen to changes to 'user' value in local storage/session storage.
   * on deletion of 'user' from 'storage', will dispatch unauthorized action.
   * on updation, will reload the application to reevaluate state/storage values.
   */
  created () {
    window.addEventListener('storage', (e) => {
      if (e.key === 'user') {
        if (e.newValue) {
          window.location.reload(true)
        } else {
          store.dispatch('unauthorized')
        }
      }
    })
  }
}
</script>
<style lang="scss">
  body {
    margin: 0;
    padding: 0;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
