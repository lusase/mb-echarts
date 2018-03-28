<template>
  <div ref="chart" class="charts">
    
  </div>
</template>

<script>
  import echarts from 'echarts'
  import {option} from './chart1'

  export default {
    data() {
      return {
        chart: null
      }
    },
    mounted() {
      this.chart = echarts.init(this.$refs.chart)
      this.chart.setOption(option)
    }
  }
</script>

<style scoped lang="scss">
  .charts {
    width: 100vw;
    height: 100vh;
  }
</style>
