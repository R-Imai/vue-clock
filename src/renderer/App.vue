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
    margin: 0px;
    width: 250px;
    height: 170px;
    background-color: rgba(40, 40, 40, 0.8);
  }

</style>
