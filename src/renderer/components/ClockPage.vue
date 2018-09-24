<template>
  <div class="Clock">
    {{ message }}
  </div>
</template>

<script>
  function set0 (num) {
    var ret
    if (num < 10) {
      ret = '0' + num
    } else {
      ret = num
    }
    return ret
  }

  export default {
    data: function () {
      return { message: 'Hello?' }
    },
    methods: {
      getTime: function () {
        var DWs = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.']
        var Now = new Date()
        var YY = Now.getYear()
        if (YY < 2000) {
          YY += 1900
        }
        var MM = set0(Now.getMonth() + 1)
        var DD = set0(Now.getDate())
        var DW = DWs[Now.getDay()]
        var hh = set0(Now.getHours())
        var mm = set0(Now.getMinutes())
        var ss = set0(Now.getSeconds())
        var RTime1 = ' ' + YY + '/' + MM + '/' + DD + '[' + DW + ']\n' + hh + ':' + mm + ':' + ss + ' '
        this.message = RTime1
      }
    },
    beforeMount: function () {
      setInterval(function () { this.getTime() }.bind(this), 1000)
    }
  }
</script>

<style>
  .Clock{
    background-color: #ccffee;
    width: 250px;
    height: 160px;
  }
</style>
