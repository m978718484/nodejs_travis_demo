<template>
  <div id="app">
    <div>
    <img src="./assets/filter_bg.jpg" style="width: 100%">
    <search
    @result-click="resultClick"
    @on-change="getResult"
    :results="results"
    v-model="value"
    position="absolute"
    auto-scroll-to-top top="46px"
    @on-focus="onFocus"
    @on-cancel="onCancel"
    @on-submit="onSubmit"
    ref="search"></search>
    <router-view></router-view>
  </div>
</template>

<script>
import { Search, Group, Cell, XButton } from 'vux'
export default {
  name: 'app',
  components: {
    Search,
    Group,
    Cell,
    XButton
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
