<template>
  <div id="app">
    <div>
    <swiper :list="demo03_list" auto style="width:80%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center"></swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem, Group, XButton } from 'vux'
const imgList = [
  'http://srmmx.com/images/index/banner.jpg',
  'http://srmmx.com/images/index/banner-1.jpg',
  'http://srmmx.com/images/index/banner-3.jpg',
  'http://srmmx.com/images/index/banner-5.jpg'
]

const demoList = imgList.map((one, index) => ({
  url: 'javascript:',
  img: one
}))

export default {
  name: 'app',
  components: {
    Swiper,
    SwiperItem,
    Group,
    XButton
  },
  data () {
    return {
      demo03_list: demoList
    }
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
}
</style>
