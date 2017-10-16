<template>
  <div>
    <search :auto-fixed="false"></search>
    <br>
    <div>
      <flexbox>
        <flexbox-item>
          <div class="flex-demo">
            <span>
              <img slot="icon" src="../assets/menu-40.png">
            </span><br>
            <a style="font-size:14px;" href="#">系统公告</a>    
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex-demo">
            <span>
              <img slot="icon" src="../assets/renewable-energy-40.png">
            </span><br>
            <a style="font-size:14px;" href="#">转让</a>  
         </div>
      </flexbox-item>
        <flexbox-item>
          <div class="flex-demo">            
            <span>
              <img slot="icon" src="../assets/aim-40.png">
            </span><br>
            <a style="font-size:14px;" href="#">转让结果</a> 
          </div> 
        </flexbox-item>
        <flexbox-item>
          <div class="flex-demo">            
            <span>
              <img slot="icon" src="../assets/transaction-40.png">
            </span><br>
            <a style="font-size:14px;" href="#">招标</a> 
          </div> 
        </flexbox-item>
        <flexbox-item>
          <div class="flex-demo">            
            <span>
              <img slot="icon" src="../assets/target-40.png">
            </span><br>
            <a style="font-size:14px;" href="#">中标公示</a> 
          </div> 
        </flexbox-item>
      </flexbox>
      <br>
      <flexbox>
        <flexbox-item>
          <div class="flex-demo">
            <span>
              <img slot="icon" src="../assets/Icon-40.png">
            </span><br>
            <a style="font-size:14px;" href="#">服务宗旨</a> 
          </div>
        </flexbox-item>
        <flexbox-item @click.native="onItemClick">
          <div class="flex-demo">
            <span>
              <img slot="icon" src="../assets/Icon-40.png">
            </span><br>
            <a style="font-size:14px;" href="#">业务规则</a> 
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex-demo">
            <span>
              <img slot="icon" src="../assets/Icon-40.png">
            </span><br>
            <a style="font-size:14px;" href="#">政策法规</a> 
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex-demo">
            <span>
              <img slot="icon" src="../assets/Icon-40.png">
            </span><br>
            <a style="font-size:14px;" href="#">操作指南</a> 
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex-demo">
            <span>
              <img slot="icon" src="../assets/Icon-40.png">
            </span><br>
            <a style="font-size:14px;" href="#">...</a> 
          </div>
        </flexbox-item>
      </flexbox>
    </div>
    <br>
    <div> 
    <cell style="text-align:left;color:red;" title="公告消息" value="更多公告" is-link></cell>
     <marquee style="text-align:center;" >
        <marquee-item v-for="i in asyncCount" :key="i" @click.native="onClick(i)" class="align-middle">关于《SMT汰旧设备转让（富士康南宁厂区-标4）（二次转让）》实地看样说明 {{i}}</marquee-item>
    </marquee>
    </div>
    <div>
      <cell style="text-align:left;color:red;" title="转让项目" value="更多转让" is-link></cell>
      <panel :list="list_zr" type="5" @on-img-error="onImgError"></panel>
    </div>
    <div>  
      <cell style="text-align:left;color:red;" title="招标项目" value="更多招标" is-link></cell>
      <panel :list="list_zb" type="5" @on-img-error="onImgError"></panel>
    </div>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, Marquee, MarqueeItem, Divider, Group, Cell, Search, Panel } from 'vux'
export default {
  data () {
    return {
      asyncCount: 0,
      list_zr: [{
        src: 'http://www.srmmx.com/upload/AuctionPicture/2017/9/18/0551c821-45a9-4224-aec8-56793d1bc902.jpg',
        title: '全新ASM原装配件一批转让',
        desc: '保证金缴纳截止时间：2017/10/19',
        url: '/component/cell',
        meta: {
          source: '浙江·杭州',
          date: '6天19时24分57秒 ',
          other: '<a style="color:blue;">更多信息</a>'
        }
      }, {
        src: 'http://www.srmmx.com/upload/AuctionPicture/2017/9/26/ddd34e1b-465f-43be-9b0a-5f8d91c588de.jpg',
        title: '（Universal/环球）自动贴片机、锡膏印刷机、SONY检查机等共21台SMT汰旧设备转让',
        desc: '保证金缴纳截止时间：2017/10/19',
        url: {
          path: '/component/radio',
          replace: false
        },
        meta: {
          source: '广东·深圳',
          date: '6天19时57分04秒',
          other: '<a style="color:blue;">更多信息</a>'
        }
      }],
      list_zb: [{
        title: '上海臨港松江科技城辦公室整改工程',
        desc: '零星工程',
        url: '/component/cell',
        meta: {
          source: '上海',
          date: '2017-08-30 10:20',
          other: '<a style="color:blue;">更多信息</a>'
        }
      }, {
        title: 'A1-2F Gemalto Cell總檢包裝移位電氣工程',
        desc: '机电工程',
        url: {
          path: '/component/radio',
          replace: false
        },
        meta: {
          source: '南京',
          date: '2017-08-10 09:20',
          other: '<a style="color:blue;">更多信息</a>'
        }
      }]
    }
  },
  components: {
    Flexbox,
    FlexboxItem,
    Marquee,
    MarqueeItem,
    Group,
    Cell,
    Panel,
    Divider,
    Search
  },
  methods: {
    onItemClick () {
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
      this.asyncCount = 5
    }, 1000)
  }
}
</script>
<style scoped>
.flex-demo {

  text-align: center;
  color: #fff;
  border-radius: 4px;
  background-clip: padding-box;
}
.align-middle {
  font-size: 12px;
  text-align: left;
  overflow: hidden; /*自动隐藏文字*/
  text-overflow: ellipsis;/*文字隐藏后添加省略号*/
}

.img-box{
    display: inline-block;
    width: 42px;
    height: 42px;
    border: 1px solid #3399FF;
    border-radius: 100px;
    position: relative;
}

.test {
    position: absolute;
    left: 7px;
    top: 9px;
    bottom: 10px;
}
</style>