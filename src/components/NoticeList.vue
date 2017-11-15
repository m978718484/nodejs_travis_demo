<template>
  <div>
    <div style="height:44px;">
      <sticky ref="sticky" :offset="46" :check-sticky-support="false">
        <tab :line-width="1" style="width:100%;position:absolute;left:0;z-index:100;">
          <tab-item v-for="(item,index) in tabTitles" :key="index" :selected=!index @on-item-click="conentChange(index)">{{ item }}</tab-item>
        </tab>
      </sticky>
    </div>
     <cell is-link v-for="i in asyncContent[index]" :key="i.id" @click.native="onClick(i.id)">
      <span v-if="i.new" slot="title" style="color:green;">
        <span style="font-size:12px;vertical-align:middle;">{{i.title}}
        </span> 
        <badge :text="i.pubDate"></badge>
      </span>
      <span v-else slot="title" style="font-size:12px;vertical-align:middle;">
        <span >{{i.title}} 
        </span> <br><span style="color:#999;">发布日期 {{i.pubDate}}</span>
      </span>
    </cell>
  </div>
</template>
<script>
import { Cell, Badge, XHeader, Tab, TabItem, Sticky } from 'vux'
const list = () => ['最新公告', '行业动态', '政策法规', '综合新闻']
export default {
  data () {
    return {
      asyncContent: [],
      tabTitles: list(),
      index: 0
    }
  },
  components: {
    Cell,
    Badge,
    XHeader,
    Tab,
    TabItem,
    Sticky
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
        { id: 8, title: '关于8月23日开标的自动贴片机、锡膏印刷机、自动光学检测机、波峰焊锡炉等共16台SMT设备转让项目实', pubDate: '2017-08-17' }],
      [{ id: 5, title: 'x《豪晶干式激光蚀刻机转让》项目延期转让公告', pubDate: '2017-09-21' },
        { id: 6, title: '关于9月12日贵阳即将开标的2个标案（P20170828001、P20170828002）实地看样说', pubDate: '2017-09-06' },
        { id: 7, title: '关于9月8日开标的3个标案（P20170424001、P20170424002、P201704240', pubDate: '2017-09-01' },
        { id: 8, title: '关于8月23日开标的自动贴片机、锡膏印刷机、自动光学检测机、波峰焊锡炉等共16台SMT设备转让项目实', pubDate: '2017-08-17' },
        { id: 9, title: '关于8月18日开标的SMT皮带流水线一批转让项目实地看样说明', pubDate: '2017-08-16' }],
      [{ id: 5, title: 'y《豪晶干式激光蚀刻机转让》项目延期转让公告', pubDate: '2017-09-21' },
        { id: 6, title: '关于9月12日贵阳即将开标的2个标案（P20170828001、P20170828002）实地看样说', pubDate: '2017-09-06' },
        { id: 7, title: '关于9月8日开标的3个标案（P20170424001、P20170424002、P201704240', pubDate: '2017-09-01' },
        { id: 8, title: '关于8月23日开标的自动贴片机、锡膏印刷机、自动光学检测机、波峰焊锡炉等共16台SMT设备转让项目实', pubDate: '2017-08-17' },
        { id: 9, title: '关于8月18日开标的SMT皮带流水线一批转让项目实地看样说明', pubDate: '2017-08-16' }],
      [{ id: 5, title: 'z《豪晶干式激光蚀刻机转让》项目延期转让公告', pubDate: '2017-09-21' },
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
    onClick (id) {
      this.$router.replace('/noticedetail/' + id)
      console.log(id)
    },
    conentChange (i) {
      this.$nextTick(() => {
        this.index = i
        this.$refs.sticky.bindSticky()
      })
    }
  }
}
</script>
<style scoped>
div .vux-swiper {
  height: 100%;
}

</style>
