<template>
  <div class="Clock" v-bind:class="{margin: isNotInfo}">
    <div class="info" v-bind:class="{disable: isNotInfo}">
      {{info}}
    </div>
    <div class="Date">
      {{ date }}
    </div>
    <div v-bind:class=timeClass>
      {{ time }}
    </div>
  </div>
</template>

<script>
  function set0 (num) {
    let ret
    if (num < 10) {
      ret = '0' + num
    } else {
      ret = num
    }
    return ret
  }

  export default {
    data: function () {
      return {
        date: '',
        time: '',
        notifiList: '',
        timeClass: 'Time',
        isNotInfo: true,
        info: ''
      }
    },
    methods: {
      getTime: function () {
        const DWs = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.']
        const Now = new Date()
        let YY = Now.getYear()
        if (YY < 2000) {
          YY += 1900
        }
        const MM = set0(Now.getMonth() + 1)
        const DD = set0(Now.getDate())
        const DW = DWs[Now.getDay()]
        const hh = set0(Now.getHours())
        const mm = set0(Now.getMinutes())
        const ss = set0(Now.getSeconds())
        this.date = ' ' + YY + '/' + MM + '/' + DD + '[' + DW + ']'
        this.time = hh + ':' + mm + ':' + ss

        const formatNotifi = hh + ':' + mm
        if (this.notifiList[formatNotifi] !== undefined) {
          console.log(this.notifiList[formatNotifi])
          this.timeClass = 'TimeNotifi'
          this.isNotInfo = false
          this.info = this.notifiList[formatNotifi]
        } else {
          this.timeClass = 'Time'
          this.isNotInfo = true
          this.info = ''
        }
      }
    },
    beforeMount: function () {
      setInterval(function () { this.getTime() }.bind(this), 1000)
      this.notifiList = require('../assets/notifiTime.json')
    }
  }
</script>

<style lang="scss">
  .margin{
    margin-top: 10px;
  }
  .Clock{
    font-size: 28px;
    text-align: center;
    .info{
      color: #fffd20;
      font-size: 14px;
    }
    .Date{
      color: #00cc88;
      font-size: 26px;
    }
    .Time{
      color: #14eedb;
      margin-top: 5px;
    }
    .TimeNotifi{
      color: #dd0000;
      font-weight: bold;
    }
    .disable{
      disable: true;
    }
  }
</style>
