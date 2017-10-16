<template>
  <div id="app">
    <div v-transfer-dom>
      <loading v-model="isLoading"></loading>
    </div>
    <router-view></router-view>
    <tabbar class="vux-demo-tabbar">
      <tabbar-item selected link="/icon">
        <img slot="icon" src="./assets/home.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/vux">
        <img slot="icon" src="./assets/menu-40.png">
        <span slot="label">公告</span>
      </tabbar-item>
      <tabbar-item link="/t">
        <img slot="icon" src="./assets/operator.png">
        <span slot="label">关于我们</span>
      </tabbar-item>
      <tabbar-item link="/">
        <img slot="icon" src="./assets/attachment.png">
        <span slot="label">我</span>
      </tabbar-item>
    </tabbar>
 </div>
</template>

<script>
import { Tabbar, TabbarItem, Loading, TransferDom } from 'vux'
import { mapState } from 'vuex'
export default {
  name: 'app',
  directives: {
    TransferDom
  },
  components: {
    Tabbar,
    TabbarItem,
    Loading
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
