<template>
  <div class="container">
    <search @on-focus="onFocus" placeholder="项目名称、所在地区、所属类别"></search>
    <swiper loop auto :list="baseList" index="0"></swiper>
    <div class="menu-main">
      <flexbox v-for="(items,index) in indexList" :key="index" style="height:90px;">
        <flexbox-item v-for="(item,index) in items" :key="index" @click.native="indexOnItemClick(item.uri)">
          <div class="flex-demo">
            <span>
              <div class="img-box">
                <img slot="icon" :src="item.src">
              </div>
            </span><br>
            <span>{{ item.title }}</span>  
          </div>
        </flexbox-item>
      </flexbox>
    </div>
    <divider></divider>
    <div class="marquee-notice"> 
      <marquee >
        <marquee-item v-for="i in asyncCount" :key="i.id" @click.native="onClick(i.title)" class="item-title">
          {{ i.category }}： {{ i.title }}
        </marquee-item>
      </marquee>
    </div>
    <divider></divider>
    <flexbox style="font-size:14px;margin-left: 5px;" @click.native="onItemClick('/')">
      <flexbox-item>转让项目
        </flexbox-item>
        <flexbox-item style="text-align:right;margin-right: 5px;"><span >更多>></span>
      </flexbox-item>
    </flexbox>
    <div class="item-list">
      <flexbox v-for="(items,index) in itemList" :key="index">
        <flexbox-item v-for="(item,index) in items" :key="index" @click.native="onItemClick(item.id)">
          <card>
            <img slot="header" :src="item.src" class="card-img">
            <div slot="content" class="card-padding">
              <p class="item-title">{{ item.title }}</p>
              <div class="item-extra">
                <p>{{ item.time }} 保证金截止</p>
                <p>{{ item.location }} | {{ item.state }}</p>
                <p>起始价:{{ item.money }}</p>
              </div>
            </div>
          </card>
        </flexbox-item>
      </flexbox>
    </div>


    <div v-transfer-dom @click="show1 = false">
      <popup v-if="show1" v-model="show1" position="left" width="100%">
        <div class="position-horizontal-demo">
          <div class="position-horizontal-demo">
            <img src="static/image/purpose.png" style="width:100%;height:100%">
          </div>
          <!-- <laws></laws> -->
        </div>
      </popup>
    </div>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, Marquee, MarqueeItem, Popup, Search, Divider, Group, Cell, Panel, XHeader, Actionsheet, TransferDom, Card, Swiper, SwiperItem } from 'vux'
import Laws from '../pages/Laws'

export default {
  components: {
    Popup,
    Search,
    XHeader,
    Actionsheet,
    TransferDom,
    Flexbox,
    FlexboxItem,
    Marquee,
    MarqueeItem,
    Group,
    Cell,
    Panel,
    Divider,
    Card,
    Laws,
    Swiper,
    SwiperItem
  },
  data () {
    return {
      show1: false,
      asyncCount: [],
      baseList: [ {url: 'javascript:', img: 'http://www.srmmx.com/webdoc/upload/AuctionPicture/2017/11/1/09116cb4-e858-415b-85c4-beb84c739ee8.jpg', title: '电子元件物料及PCB光板转让项目'},
      { url: 'javascript:', img: 'http://www.srmmx.com/webdoc/upload/AuctionPicture/2017/11/13/d3d2f3bb-0524-4a83-a2ea-1a63b44af72c.jpg', title: '报废灭火器转让（深圳龙华）' },
      { url: 'javascript:', img: 'http://www.srmmx.com/webdoc/upload/AuctionPicture/2017/11/14/fd312ec0-64a5-454a-a704-13b3b9fc298b.jpg', title: '河南济源富泰华精密电子（济源）有限公司废铝屑转让' } ],
      indexList: [ [
        { uri: '/noticelist', title: '系统公告', src: 'static/images/menu.svg' },
        { uri: '', title: '转让', src: 'static/images/globe.svg' },
        { uri: '', title: '转让结果', src: 'static/images/aim.svg' },
        { uri: '', title: '招标', src: 'static/images/transaction.svg' },
        { uri: '', title: '中标公示', src: 'static/images/target.svg' }
      ],
      [
        { uri: '#', title: '服务宗旨', src: 'static/images/customer-service.svg' },
        { uri: '/rule', title: '业务规则', src: 'static/images/pen.svg' },
        { uri: '', title: '政策法规', src: 'static/images/balance.svg' },
        { uri: '/manual', title: '操作指南', src: 'static/images/lighthouse.svg' },
        { uri: '', title: '', src: '' }
      ] ],
      itemList: [ [ { id: 0, src: 'http://www.srmmx.com/upload/AuctionPicture/2017/9/18/0551c821-45a9-4224-aec8-56793d1bc902.jpg', title: '（Universal/环球）自动贴片机、锡膏印刷机、SONY检查机等共21台SMT汰旧设备转让', time: '10-19 17:30', location: '浙江·杭州', state: '报名中', money: '100,350,000.00RMB' }, { id: 1, src: 'http://www.srmmx.com/upload/AuctionPicture/2017/9/26/ddd34e1b-465f-43be-9b0a-5f8d91c588de.jpg', title: '转角机、接驳台一批转让', time: '10-19 17:30', location: '广东·深圳', state: '准备中', money: '100,350,000.00RMB' } ], [ { id: 2, src: 'http://www.srmmx.com/upload/AuctionPicture/2017/8/24/9983e3bc-8706-4763-8e92-ad3fdb7d8622.jpg', title: 'SMT汰旧设备转让（富士康南宁厂区-标4）（二次转让）', time: '10-19 17:30', location: '北京', state: '已结束', money: '350,000.00RMB' }, { id: 3, src: 'http://www.srmmx.com/upload/AuctionPicture/2017/9/12/8d8ac6cc-8a2e-4526-95d2-8c3312f3830e.jpg', title: '豪晶干式激光蚀刻机转让', time: '10-19 17:30', location: '广西·南宁', state: '已结束', money: '15,000.00USD' } ] ]
    }
  },
  directives: {
    TransferDom
  },
  methods: {
    onItemClick (id) {
      this.$router.replace('/t/' + id)
    },
    indexOnItemClick (path) {
      if (path === '#') {
        this.show1 = true
      } else {
        this.$router.replace(path)
      }
    },
    onClick (i) {
      alert(i)
      console.log(i)
    },
    onImgError (item, $event) {
      console.log(item, $event)
    },
    onSearchClick () {
      this.$router.replace('/search')
    },
    onClickMore () {
      this.showMenu = true
    },
    onFocus () {
      this.$router.replace('/search')
    }
  },
  mounted () {
    setTimeout(() => {
      this.asyncCount = [{ id: 1, category: '转让', title: '【天津】电子元件物料及PCB光板转让项目  报名中【11-30 17:30报名截止】' }, { id: 2, category: '公告', title: '关于《电子元件物料及PCB光板转让项目》项目公告补遗' }, { id: 3, category: '招标', title: '【河南·郑州】【公开】河南郑州鸿富锦精密电子(郑州)有限公司生活垃圾招标项目' }]
    }, 1000)
  }
}
</script>
<style scoped>
.card-img{
  width:100%;
  height:110px;
  display:block;
}
.flex-demo {
  text-align: center;
  color: #fff;
  border-radius: 4px;
  background-clip: padding-box;
}
.flex-demo span {
  color:black;
  font-size:14px;
}
.item-extra {
  color:#999;
  font-size:12px;
}
.item-title {
  font-size: 14px;
  overflow: hidden; /*自动隐藏文字*/
  text-overflow: ellipsis;/*文字隐藏后添加省略号*/
  white-space:nowrap;
  height: 18px;
  line-height:1.2;
}

.img-box {
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 100px;
    position: relative;
}
</style>