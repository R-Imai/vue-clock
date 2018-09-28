<template>
  <div class="mainpage">
    <DisplaySpace />
    <Clock />
  </div>
</template>

<script>
import Clock from '@/components/Clock'
import DisplaySpace from '@/components/DisplaySpace'
export default{
  components: {
    Clock,
    DisplaySpace
  }
}
</script>

<style>
.mainpage{
  width: 250px;
  height: 160px;
  background-color: #ccffee;
}
</style>
