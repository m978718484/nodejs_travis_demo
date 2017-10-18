<template>
  <div>
    <x-header title="公告列表" style="background-color:#FF3B3B;"></x-header>
    <div>
       <tab :line-width=2 active-color='#fc378c' v-model="index">
        <tab-item class="vux-center" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
      </tab>
      <swiper v-model="index" :show-dots="false" height="800px">
        <swiper-item v-for="(item, index) in list2" :key="index">
           <cell is-link v-for="i in asyncContent[index]" :key="i.id" @click.native="onClick(i.id)">
            <span v-if="i.new" slot="title" style="color:green;">
              <span style="font-size:12px;vertical-align:middle;">{{i.title}}
              </span> 
              <badge :text="i.pubDate"></badge>
            </span>
            <span v-else slot="title" style="font-size:12px;vertical-align:middle;">
              <span >{{i.title}} 
              </span> <br><span>发布日期 {{i.pubDate}}</span>
            </span>
          </cell>
        </swiper-item>
      </swiper>
    </div>
  </div>
</template>
<script>
import { Cell, Badge, XHeader, Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem } from 'vux'
const list = () => ['最新公告', '行业动态', '政策法规', '综合新闻']
export default {
  data () {
    return {
      asyncContent: [],
      list2: list(),
      index: 0
    }
  },
  components: {
    Cell,
    Badge,
    XHeader,
    Tab,
    TabItem,
    Sticky,
    Divider,
    XButton,
    Swiper,
    SwiperItem
  },
  mounted () {
    setTimeout(() => {
      this.asyncContent = [[
        { id: 1, new: 'new', title: '关于10月20日龙华即将开标的2个标案（P20170926001、P20170926002）实地看样', pubDate: '2017-10-13' },
        { id: 2, title: '关于《SMT汰旧设备转让（富士康南宁厂区-标4）（二次转让）》实地看样说明', pubDate: '2017-10-09' },
        { id: 3, title: '《全新ASM原装配件一批转让》项目延期转让公告', pubDate: '2017-09-25' },
        { id: 4, title: '关于9月29日杭州即将开标的2个标案（P20170918001、P20170918003）实地看样说', pubDate: '2017-09-25' },
        { id: 5, title: '《豪晶干式激光蚀刻机转让》项目延期转让公告', pubDate: '2017-09-21' },
        { id: 6, title: '关于9月12日贵阳即将开标的2个标案（P20170828001、P20170828002）实地看样说', pubDate: '2017-09-06' },
        { id: 7, title: '关于9月8日开标的3个标案（P20170424001、P20170424002、P201704240', pubDate: '2017-09-01' },
        { id: 8, title: '关于8月23日开标的自动贴片机、锡膏印刷机、自动光学检测机、波峰焊锡炉等共16台SMT设备转让项目实', pubDate: '2017-08-17' },
        { id: 9, title: '关于8月18日开标的SMT皮带流水线一批转让项目实地看样说明', pubDate: '2017-08-16' }],
      [{ id: 5, title: '《豪晶干式激光蚀刻机转让》项目延期转让公告', pubDate: '2017-09-21' },
        { id: 6, title: '关于9月12日贵阳即将开标的2个标案（P20170828001、P20170828002）实地看样说', pubDate: '2017-09-06' },
        { id: 7, title: '关于9月8日开标的3个标案（P20170424001、P20170424002、P201704240', pubDate: '2017-09-01' },
        { id: 8, title: '关于8月23日开标的自动贴片机、锡膏印刷机、自动光学检测机、波峰焊锡炉等共16台SMT设备转让项目实', pubDate: '2017-08-17' },
        { id: 9, title: '关于8月18日开标的SMT皮带流水线一批转让项目实地看样说明', pubDate: '2017-08-16' }],
      [{ id: 5, title: '《豪晶干式激光蚀刻机转让》项目延期转让公告', pubDate: '2017-09-21' },
        { id: 6, title: '关于9月12日贵阳即将开标的2个标案（P20170828001、P20170828002）实地看样说', pubDate: '2017-09-06' },
        { id: 7, title: '关于9月8日开标的3个标案（P20170424001、P20170424002、P201704240', pubDate: '2017-09-01' },
        { id: 8, title: '关于8月23日开标的自动贴片机、锡膏印刷机、自动光学检测机、波峰焊锡炉等共16台SMT设备转让项目实', pubDate: '2017-08-17' },
        { id: 9, title: '关于8月18日开标的SMT皮带流水线一批转让项目实地看样说明', pubDate: '2017-08-16' }],
      [{ id: 5, title: '《豪晶干式激光蚀刻机转让》项目延期转让公告', pubDate: '2017-09-21' },
        { id: 6, title: '关于9月12日贵阳即将开标的2个标案（P20170828001、P20170828002）实地看样说', pubDate: '2017-09-06' },
        { id: 7, title: '关于9月8日开标的3个标案（P20170424001、P20170424002、P201704240', pubDate: '2017-09-01' },
        { id: 8, title: '关于8月23日开标的自动贴片机、锡膏印刷机、自动光学检测机、波峰焊锡炉等共16台SMT设备转让项目实', pubDate: '2017-08-17' },
        { id: 9, title: '关于8月18日开标的SMT皮带流水线一批转让项目实地看样说明', pubDate: '2017-08-16' }]
      ]
    }, 500)
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
div .vux-swiper {
  height: 100%;
}

</style>
