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
    background-color: rgba(92, 89, 89, 0.7);
  }

</style>
