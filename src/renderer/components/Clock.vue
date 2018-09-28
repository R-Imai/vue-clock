<template>
  <div class="Clock">
    <div class="Date">
      {{ date }}
    </div>
    <div class="Time">
      {{ time }}
    </div>
  </div>
</template>

<script>
  // import Push from 'push.js'
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
        noti: ''
      }
    },
    methods: {
      // notifi: function () {
      //   console.log(Push)
      //   Push.create('Hello world!', {
      //     body: 'Test?',
      //     timeout: 10000,
      //     onClick: function () {
      //       window.focus()
      //       this.close()
      //     }
      //   })
      //   console.log(Push.supported())
      // },
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
        // if (ss === '00') {
        //   this.notifi()
        // }
        this.date = ' ' + YY + '/' + MM + '/' + DD + '[' + DW + ']'
        this.time = hh + ':' + mm + ':' + ss
      }
    },
    beforeMount: function () {
      setInterval(function () { this.getTime() }.bind(this), 1000)
    }
  }
</script>

<style lang="scss">
  .Clock{
    font-size: 24px;
    text-align: center;
    .Date{
      color: #006644;
    }
    .Time{
      color: #14eedb;
    }
  }
</style>
