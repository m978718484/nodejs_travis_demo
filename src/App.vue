<template>
  <div id="app">
    <div v-transfer-dom>
      <loading v-model="isLoading"></loading>
    </div>
    <div class="header-style" style="width:100%;position:absolute;left:0;top:0;z-index:100;background-color:#FF3B3B;"> 
      <x-header v-if="route.path === '/icon'" @on-click-title="onSearchClick">
        <span>
          <i class="weui-icon-search" style="font-size:20px;"></i><span>搜索</span>
        </span>
        <x-icon slot="overwrite-left" type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
      </x-header>
      <x-header v-else 
      :left-options="leftOptions"
      :title="title"
      :transition="headerTransition"
      @on-click-more="onClickMore">
      <span v-if="route.path === '/' || route.path === '/component/drawer'" slot="overwrite-left" @click="drawerVisibility = !drawerVisibility">
          <x-icon type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
      </span>
      </x-header>
    </div>
    <br>
    <br>
    <router-view></router-view>
    <br>
    <br>
    <br>
    <tabbar class="vux-demo-tabbar">
      <tabbar-item link="/icon" :selected="route.path === '/icon'">
        <img slot="icon" src="static/images/house.svg">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/vux" :selected="route.path === '/vux'">
        <img slot="icon" src="static/images/menu.svg">
        <span slot="label">公告</span>
      </tabbar-item>
      <tabbar-item link="/t" :selected="route.path === '/t'">
        <img slot="icon" src="static/images/home.png">
        <span slot="label">关于我们</span>
      </tabbar-item>
      <tabbar-item link="/" :selected="route.path === '/'">
        <img slot="icon" src="static/images/account.svg">
        <span slot="label">我</span>
      </tabbar-item>
    </tabbar>
 </div>
</template>

<script>
import { Tabbar, TabbarItem, Loading, TransferDom, Popup, XHeader } from 'vux'
import { mapState } from 'vuex'
export default {
  name: 'app',
  directives: {
    TransferDom
  },
  data () {
    return {
      showSearch: false,
      defaultSearch: 'vux',
      drawerVisibility: false
    }
  },
  components: {
    Popup,
    XHeader,
    Tabbar,
    TabbarItem,
    Loading
  },
  methods: {
    onSearchClick () {
      this.$router.replace('/search')
    },
    onClickMore () {
      this.showMenu = true
    },
    onSubmit (val) {
      window.alert('on submit' + val)
    },
    onCancel () {
      console.log('on cancel')
      this.showSearch = false
    },
    onFocus () {
      console.log('on focus')
    }
  },
  computed: {
    ...mapState({
      route: state => state.route,
      path: state => state.route.path,
      deviceready: state => state.app.deviceready,
      demoTop: state => state.vux.demoScrollTop,
      isLoading: state => state.vux.isLoading,
      direction: state => state.vux.direction
    }),
    isShowBar () {
      if (/component/.test(this.path)) {
        return true
      }
      return false
    },
    leftOptions () {
      return {
        showBack: false // this.route.path !== '/'
      }
    },
    rightOptions () {
      return {
        showMore: true
      }
    },
    headerTransition () {
      return this.direction === 'forward' ? 'vux-header-fade-in-right' : 'vux-header-fade-in-left'
    },
    componentName () {
      if (this.route.path) {
        const parts = this.route.path.split('/')
        if (/component/.test(this.route.path) && parts[2]) return parts[2]
      }
    },
    isDemo () {
      return /component|demo/.test(this.route.path)
    },
    isTabbarDemo () {
      return /tabbar/.test(this.route.path)
    },
    title () {
      if (this.route.path === '/') return '个人中心'
      if (this.route.path === '/vux') return '公告列表'
      if (this.route.path === '/demo') return '首页'
      if (this.route.path === '/t') return '测试页'
      if (this.route.path === '/search') return '搜索'
      return this.componentName ? `Demo/${this.componentName}` : 'Demo/~~'
    }
  }
}
</script>


<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/tap.less';
@import '~vux/src/styles/close.less';

body {
  background-color: #fbf9fe;
}
html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}

.position-horizontal-search {
  position: relative;
  background-color:#FFFAFA;
  height: 100%;
  .vux-close {
    position: absolute;
    top: 2%;
    left: 96%;
    transform: translateX(-50%) translateY(-50%) scale(1);
    color: #000;
  }
}
</style>
