<template>
  <div class="container">
    <br>
    <div class="menu-main">
      <flexbox>
        <flexbox-item @click.native="onItemClick('/vux')">
          <div class="flex-demo">
            <span>
               <div class="img-box"><img slot="icon" src="../assets/menu.svg"></div>
            </span><br>
            <span>系统公告</span>  
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex-demo">
            <span>
              <div class="img-box"><img slot="icon" src="../assets/globe.svg"></div>
            </span><br>
            <span>转让</span>
         </div>
      </flexbox-item>
        <flexbox-item>
          <div class="flex-demo">            
            <span>
             <div class="img-box"><img slot="icon" src="../assets/aim.svg"></div>
            </span><br>
            <span>转让结果</span> 
          </div> 
        </flexbox-item>
        <flexbox-item>
          <div class="flex-demo">            
            <span>
              <div class="img-box"><img slot="icon" src="../assets/transaction.svg"></div>
            </span><br>
            <span>招标</span> 
          </div> 
        </flexbox-item>
        <flexbox-item>
          <div class="flex-demo">            
            <span>
              <div class="img-box"><img slot="icon" src="../assets/target.svg"></div>
            </span><br>
            <span>中标公示</span> 
          </div> 
        </flexbox-item>
      </flexbox>
      <br>
      <flexbox>
        <flexbox-item>
          <div class="flex-demo">
            <span>
               <div class="img-box"><img slot="icon" src="../assets/customer-service.svg"></div>
            </span><br>
            <span>服务宗旨</span> 
          </div>
        </flexbox-item>
        <flexbox-item @click.native="onItemClick('/')">
          <div class="flex-demo">
            <span>
              <div class="img-box"><img slot="icon" src="../assets/pen.svg"></div>
            </span><br>
            <span>业务规则</span> 
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex-demo">
            <span>
              <div class="img-box"><img slot="icon" src="../assets/balance.svg"></div>
            </span><br>
            <span>政策法规</span> 
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex-demo">
            <span>
              <div class="img-box"><img slot="icon" src="../assets/lighthouse.svg"></div>
            </span><br>
            <span>操作指南</span> 
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex-demo">
          </div>
        </flexbox-item>
      </flexbox>
    </div>
    <divider></divider>
    <div class="marquee-notice"> 
      <marquee >
        <marquee-item v-for="i in asyncCount" :key="i.id" @click.native="onClick(i.id)" class="item-title">公告： {{i.title}}
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
      <flexbox>
        <flexbox-item>
          <card>
          <img slot="header" src="http://www.srmmx.com/upload/AuctionPicture/2017/9/18/0551c821-45a9-4224-aec8-56793d1bc902.jpg" class="card-img">
          <div slot="content" class="card-padding">
            <p class="item-title">（Universal/环球）自动贴片机、锡膏印刷机、SONY检查机等共21台SMT汰旧设备转让</p>
            <div class="item-extra">
              <p>10-19 17:30 保证金截止</p>
              <p>浙江·杭州 | 报名中</p>
              <p>起始价:1,350,000.00RMB</p>
            </div>
          </div>
        </card>
        </flexbox-item>
        <flexbox-item @click.native="onItemClick">
          <card>
          <img slot="header" src="http://www.srmmx.com/upload/AuctionPicture/2017/9/26/ddd34e1b-465f-43be-9b0a-5f8d91c588de.jpg" class="card-img">
          <div slot="content" class="card-padding">
            <p class="item-title">转角机、接驳台一批转让</p>
             <div class="item-extra">
            <p>10-20 17:30 保证金截止</p>
            <p>广东·深圳 | 准备中</p>
            <p>起始价:15,000.00USD</p>
          </div>
          </div>
        </card>
        </flexbox-item>
      </flexbox>
      <flexbox>
        <flexbox-item>
          <card>
          <img slot="header" src="http://www.srmmx.com/upload/AuctionPicture/2017/8/24/9983e3bc-8706-4763-8e92-ad3fdb7d8622.jpg" class="card-img">
          <div slot="content" class="card-padding">
            <p class="item-title">SMT汰旧设备转让（富士康南宁厂区-标4）（二次转让）</p>        
            <div class="item-extra">
              <p>10-19 17:30 保证金截止</p>
              <p>北京 | 已结束</p>
              <p>起始价:350,000.00RMB</p>
            </div>
          </div>
        </card>
        </flexbox-item>
        <flexbox-item @click.native="onItemClick">
        <card>
          <img class="card-img" slot="header" src="http://www.srmmx.com/upload/AuctionPicture/2017/9/12/8d8ac6cc-8a2e-4526-95d2-8c3312f3830e.jpg">
          <div slot="content" class="card-padding">
            <p class="item-title">豪晶干式激光蚀刻机转让</p>
            <div class="item-extra">
              <p>10-19 17:30 保证金截止</p>
              <p>广西·南宁 | 已结束</p>
              <p>起始价:15,000.00USD</p>
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
      asyncCount: []
    }
  },
  directives: {
    TransferDom
  },
  methods: {
    onItemClick (p) {
      this.$router.replace(p)
      console.log('on item click')
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