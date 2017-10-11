<template>
  <div>
    <search
    @result-click="resultClick"
    @on-change="getResult"
    :results="results"
    v-model="value"
    position="absolute"
    auto-scroll-to-top top="20px"
    @on-focus="onFocus"
    @on-cancel="onCancel"
    @on-submit="onSubmit"
    ref="search"></search>
    <swiper auto height="30px" direction="vertical" :interval=2000 class="text-scroll" :show-dots="false">
      <swiper-item><p>义务爱了 完成传奇世界H5-王者归来任务 获得20金币</p></swiper-item>
      <swiper-item><p>基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币</p></swiper-item>
      <swiper-item><p>零哥章魚 完成传奇世界H5-王者归来任务 获得30金币</p></swiper-item>
      <swiper-item><p>做迎而為 兑换【饿了么】畅享美食红包 消耗20金币</p></swiper-item>
      <swiper-item><p>只知道不知道 兑换【饿了么】畅享美食红包 消耗20金币</p></swiper-item>
      <swiper-item><p>基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币</p></swiper-item>
    </swiper>
    <br>
    <br>
    <router-view></router-view>
    <grid>
      <grid-item link="/component/cell" label="公告">
        <img slot="icon" src="../assets/home.png">
      </grid-item>
      <grid-item :link="{ path: '/component/cell'}" label="转让项目">
        <img slot="icon" src="../assets/home.png">
      </grid-item>
      <grid-item link="/component/cell" @on-item-click="onItemClick">
        <img slot="icon" src="../assets/home.png">
        <span slot="label">转让结果</span>
      </grid-item>
    </grid>
    <grid>
      <grid-item link="/component/cell" label="招标项目">
        <img slot="icon" src="../assets/home.png">
      </grid-item>
      <grid-item :link="{ path: '/component/cell'}" label="中标结果">
        <img slot="icon" src="../assets/home.png">
      </grid-item>
      <grid-item link="/component/cell" @on-item-click="onItemClick">
        <img slot="icon" src="../assets/home.png">
        <span slot="label">关于我们</span>
      </grid-item>
    </grid>
    <marquee>
      <marquee-item v-for="i in asyncCount" :key="i" @click.native="onClick(i)" class="align-middle">关于《SMT汰旧设备转让（富士康南宁厂区-标4）（二次转让）》实地看样说明 {{i}}</marquee-item>
    </marquee>
  </div>
</template>
<script>
import { Grid, GridItem, GroupTitle, Marquee, MarqueeItem, Swiper, SwiperItem, Search, Divider } from 'vux'

export default {
  data () {
    return {
      asyncCount: 0
    }
  },
  components: {
    Grid,
    GridItem,
    GroupTitle,
    Search,
    Swiper,
    SwiperItem,
    Divider,
    Marquee,
    MarqueeItem
  },
  mounted () {
    setTimeout(() => {
      this.asyncCount = 5
    }, 1000)
  },
  methods: {
    onItemClick () {
      console.log('on item click')
    },
    onClick (i) {
      console.log(i)
    }
  }
}
</script>
<style scoped>
.text-scroll {
  border: 1px solid #ddd;
  border-left: none;
  border-right: none;
}
.text-scroll p{
  font-size: 12px;
  text-align: center;
  line-height: 30px;
}

.align-middle {
  font-size: 12px;
  text-align: center;
}
</style>
