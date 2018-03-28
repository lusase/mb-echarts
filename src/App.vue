<template>
  <div id="app">
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="shop" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="chat" dot to="/charts">图表</van-tabbar-item>
      <van-tabbar-item icon="records" info="5" to="/table">表格</van-tabbar-item>
      <van-tabbar-item icon="gold-coin" info="20" to="/me">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style lang="scss">
  #app {
    background: #fff;
  }
</style>
