<template>
  <div id="app">
    <div v-transfer-dom>
      <loading v-model="isLoading"></loading>
    </div>
    <search :auto-fixed="false"></search>
    <router-view></router-view>
    <tabbar class="vux-demo-tabbar">
      <tabbar-item selected link="/icon">
        <img slot="icon" src="./assets/home.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item selected link="/vux">
        <img slot="icon" src="./assets/home.png">
        <span slot="label">公告</span>
      </tabbar-item>
      <tabbar-item selected link="/component/demo">
        <img slot="icon" src="./assets/home.png">
        <span slot="label">地区</span>
      </tabbar-item>
      <tabbar-item selected link="/">
        <img slot="icon" src="./assets/home.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
 </div>
</template>

<script>
import { Tabbar, TabbarItem, Search } from 'vux'
import { mapState } from 'vuex'
export default {
  name: 'app',
  components: {
    Search,
    Tabbar,
    TabbarItem
  },
  computed: {
    ...mapState({
      route: state => state.route,
      path: state => state.route.path,
      deviceready: state => state.app.deviceready,
      demoTop: state => state.vux.demoScrollTop,
      isLoading: state => state.vux.isLoading,
      direction: state => state.vux.direction
    })
  }
}
</script>


<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/tap.less';

body {
  background-color: #fbf9fe;
}
html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
</style>
