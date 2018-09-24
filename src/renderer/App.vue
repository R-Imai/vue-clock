<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'vue-clock'
  }
</script>

<style>
  body {
    -webkit-app-region: drag;
    width: 300px;
    height: 200px;
  }

</style>
