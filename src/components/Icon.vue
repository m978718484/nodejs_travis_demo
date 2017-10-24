<template>
  <div class="container">
    <br>
    <div class="menu-main">
      <flexbox v-for="(items,index) in indexList" :key="index" style="height:90px;">
        <flexbox-item v-for="(item,index) in items" :key="index" @click.native="indexOnItemClick(item.uri)">
          <div class="flex-demo">
            <span>
               <div class="img-box"><img slot="icon" :src="item.src"></div>
            </span><br>
            <span>{{ item.title }}</span>  
          </div>
        </flexbox-item>
      </flexbox>
      <br>
    </div>
    <divider></divider>
    <div class="marquee-notice"> 
      <marquee >
        <marquee-item v-for="i in asyncCount" :key="i.id" @click.native="onClick(i.id)" class="item-title">公告： {{ i.title }}
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
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, Marquee, MarqueeItem, Divider, Group, Cell, Panel, XHeader, Actionsheet, TransferDom, Card } from 'vux'
export default {
  components: {
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
    Card
  },
  data () {
    return {
      asyncCount: [],
      indexList: [ [
        { uri: '/vux', title: '系统公告', src: 'static/images/menu.svg' },
        { uri: '', title: '转让', src: 'static/images/globe.svg' },
        { uri: '', title: '转让结果', src: 'static/images/aim.svg' },
        { uri: '', title: '招标', src: 'static/images/transaction.svg' },
        { uri: '', title: '中标公示', src: 'static/images/target.svg' }
      ],
      [
        { uri: '', title: '服务宗旨', src: 'static/images/customer-service.svg' },
        { uri: '', title: '业务规则', src: 'static/images/pen.svg' },
        { uri: '', title: '政策法规', src: 'static/images/balance.svg' },
        { uri: '', title: '操作指南', src: 'static/images/lighthouse.svg' },
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
      this.$router.replace(path)
    },
    onClick (i) {
      console.log(i)
    },
    onImgError (item, $event) {
      console.log(item, $event)
    }
  },
  mounted () {
    setTimeout(() => {
      this.asyncCount = [{ id: 1, title: 'xxx' }, { id: 2, title: 'yyyy' }, { id: 3, title: 'zzzz' }]
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