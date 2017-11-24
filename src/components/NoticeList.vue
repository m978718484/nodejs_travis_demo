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
      [{ id: 1, title: '政府采购项目招标中几种评标方法的运用', pubDate: '2017-06-09' },
        { id: 2, title: '青海钰容拍卖有限公司2017年首场异地网络拍卖会圆满成功', pubDate: '2017-06-09' },
        { id: 3, title: '安徽省名家书画惠民活动专场拍卖会圆满落幕', pubDate: '2017-06-09' },
        { id: 4, title: '福布斯全球十大科技公司排行 中国只有它上榜！', pubDate: '2017-06-07' },
        { id: 5, title: '摩拜共享单车武汉造 每天3000辆小橙车下线', pubDate: '2017-06-07' },
        { id: 6, title: 'iphone8上市最新消息：富士康爆料iphone8，屏占比高达98%', pubDate: '2017-06-07' },
        { id: 7, title: '为何苹果会支持富士康竞购东芝闪存业务', pubDate: '2017-06-07' },
        { id: 8, title: 'SMT贴片加工技术都有哪些优点', pubDate: '2017-06-06' },
        { id: 9, title: 'SMT技术发展前景', pubDate: '2017-06-06' }],
      [{ id: 1, title: '拍卖监督管理办法——国家工商行政管理总局令（第59号）', pubDate: '2017-06-09' },
       { id: 2, title: '最高人民法院关于实施《最高人民法院关于人民法院委托评估、拍卖工作的若干规定》有关问题的通知', pubDate: '2017-06-09' },
       { id: 3, title: '网络交易管理办法（国家工商行政管理总局令第60号）', pubDate: '2017-06-09' },
       { id: 4, title: '中华人民共和国消费者权益保护法', pubDate: '2017-06-09' },
       { id: 5, title: '中华人民共和国拍卖法（新）', pubDate: '2017-06-09' },
       { id: 6, title: '商务部公告2007年第42号', pubDate: '2017-06-09' },
       { id: 7, title: '商务部、海关总署公告2007年第41号', pubDate: '2017-06-09' }],
      [{ id: 1, title: '2016年度拍卖行业十大事件揭晓', pubDate: '2017-06-09' },
       { id: 2, title: '国务院发话：除这个清单外，其他职业资格证都不用再考！', pubDate: '2017-06-09' },
       { id: 3, title: '国务院办公厅关于同意建立公共资源交易平台整合工作部际联席会议制度的函', pubDate: '2017-06-09' }]
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
