<template>
  <div>
    <div>
      <flexbox>
        <flexbox-item>
          <div class="flex-demo">
            <img slot="icon" src="../assets/Icon-40.png">
          </div>
        </flexbox-item>
        <flexbox-item><div class="flex-demo"><img slot="icon" src="../assets/Icon-40.png"></div></flexbox-item>
        <flexbox-item><div class="flex-demo"><img slot="icon" src="../assets/Icon-40.png"></div></flexbox-item>
        <flexbox-item><div class="flex-demo"><img slot="icon" src="../assets/Icon-40.png"></div></flexbox-item>
        <flexbox-item><div class="flex-demo"><img slot="icon" src="../assets/Icon-40.png"></div></flexbox-item>
      </flexbox>
      <br>
      <flexbox>
        <flexbox-item>
          <div class="flex-demo">
            <img slot="icon" src="../assets/Icon-40.png">
          </div>
        </flexbox-item>
        <flexbox-item @click.native="onItemClick"><div class="flex-demo"><img slot="icon" src="../assets/Icon-40.png"></div></flexbox-item>
        <flexbox-item><div class="flex-demo"><img slot="icon" src="../assets/Icon-40.png"></div></flexbox-item>
        <flexbox-item><div class="flex-demo"><img slot="icon" src="../assets/Icon-40.png"></div></flexbox-item>
        <flexbox-item><div class="flex-demo"><img slot="icon" src="../assets/Icon-40.png"></div></flexbox-item>
      </flexbox>
    </div>
    <div> 
    <cell style="text-align:left;color:red;font-size: 13px;" title="公告消息" value="更多" is-link></cell>
     <marquee style="text-align:center;" >
        <marquee-item v-for="i in asyncCount" :key="i" @click.native="onClick(i)" class="align-middle">关于《SMT汰旧设备转让（富士康南宁厂区-标4）（二次转让）》实地看样说明 {{i}}</marquee-item>
    </marquee>
    </div>
    <div>
      <cell style="text-align:left;color:red;font-size: 13px;" title="转让项目" value="更多" is-link></cell>
      <panel :list="list" :type="type" @on-img-error="onImgError"></panel>
    </div>
    <div>  
      <cell style="text-align:left;color:red;font-size: 13px;" title="招标项目" value="更多" is-link></cell>
      <marquee>
        <marquee-item v-for="i in asyncCount" :key="i" @click.native="onClick(i)" class="align-middle">关于《SMT汰旧设备转让（富士康南宁厂区-标4）（二次转让）》实地看样说明 {{i}}</marquee-item>
      </marquee>
    </div>
    <div>  
      <cell style="text-align:left;color:red;font-size: 13px;" title="转让结果" value="更多" is-link></cell>
      <marquee>
        <marquee-item v-for="i in asyncCount" :key="i" @click.native="onClick(i)" class="align-middle">关于《SMT汰旧设备转让（富士康南宁厂区-标4）（二次转让）》实地看样说明 {{i}}</marquee-item>
      </marquee>
    </div>
    <div>  
      <cell style="text-align:left;color:red;font-size: 13px;" title="招标结果" value="更多" is-link></cell>
      <marquee>
        <marquee-item v-for="i in asyncCount" :key="i" @click.native="onClick(i)" class="align-middle">关于《SMT汰旧设备转让（富士康南宁厂区-标4）（二次转让）》实地看样说明 {{i}}</marquee-item>
      </marquee>
    </div>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, Marquee, MarqueeItem, Divider, Group, Cell, Panel } from 'vux'
export default {
  data () {
    return {
      asyncCount: 0,
      type: '5',
      list: [{
        src: 'http://www.srmmx.com/upload/AuctionPicture/2017/9/18/0551c821-45a9-4224-aec8-56793d1bc902.jpg',
        title: '全新ASM原装配件一批转让',
        desc: '保证金缴纳截止时间：2017/10/19',
        url: '/component/cell',
        meta: {
          source: '浙江·杭州',
          date: '6天19时24分57秒 ',
          other: '<a style="color:red;">我要报名</a>'
        }
      }, {
        src: 'http://www.srmmx.com/upload/AuctionPicture/2017/9/26/ddd34e1b-465f-43be-9b0a-5f8d91c588de.jpg',
        title: '（Universal/环球）自动贴片机、锡膏印刷机、SONY检查机等共21台SMT汰旧设备转让',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: {
          path: '/component/radio',
          replace: false
        },
        meta: {
          source: '广东·深圳',
          date: '6天19时57分04秒',
          other: '<a style="color:red;">我要报名</a>'
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
    Divider
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
}
</style>