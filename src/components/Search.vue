<template>
  <div>
    <search ref="search" 
            @on-submit="onSubmit"
            @on-focus="onFocus" 
            @on-cancel="onCancel"
            :auto-fixed="false"></search>
    <divider>日  期</divider>
    <checker v-model="timeSelect" default-item-class="demo5-item" selected-item-class="demo5-item-selected" style="padding-left:6px;">
      <checker-item @on-item-click="" v-for="(i,index) in ['三天内', '一周内', '一个月内', '更多时间']" :key="index" :value="index">{{i}}</checker-item>
    </checker>            
    <divider>所在地区</divider>
    <!-- <group>
    <x-address :title="title" v-model="value4" raw-value :list="addressData" hide-district placeholder="请选择地址">
      <template slot="title" slot-scope="props">
        <span :class="props.labelClass" :style="props.labelStyle" style="height:24px;">
          <span class="demo-icon demo-icon-big" style="font-size:20px;vertical-align:middle;"></span>
          <span style="vertical-align:middle;">地址</span>
       </span>
      </template>
    </x-address>
    </group> -->
    <x-address title="地区" v-model="value4" raw-value :list="addressData" hide-district></x-address>
    <divider>所属类别</divider>
  </div>
</template>

<script>
import { Checker, CheckerItem, Divider, Search, XAddress, ChinaAddressV4Data, Value2nameFilter as value2name, Group } from 'vux'

export default {
  components: {
    Group,
    XAddress,
    Checker,
    CheckerItem,
    Divider,
    Search
  },
  mounted () {
    this.$refs.search.setFocus()
  },
  data () {
    return {
      title: '默认为空',
      showSpace: false,
      count: 0,
      timeSelect: -1,
      value4: [],
      addressData: ChinaAddressV4Data
    }
  },
  methods: {
    getName (value) {
      console.log(value)
      return value2name(value, ChinaAddressV4Data)
    },
    onSubmit (val) {
      window.alert('on submit' + val)
    },
    onCancel () {
      console.log('on cancel')
      this.$router.replace('/icon')
    },
    onFocus () {
      console.log('on focus')
    }
  }
}
</script>
<style scoped>
@font-face {
  font-family: 'vux-demo';
  /* project id 70323 */
  src: url('../assets/font/font_h1fz4ogaj5cm1jor.eot');
  src: url('../assets/font/font_h1fz4ogaj5cm1jor.eot?#iefix') format('embedded-opentype'), url('../assets/font/font_h1fz4ogaj5cm1jor.woff') format('woff'), url('../assets/font/font_h1fz4ogaj5cm1jor.ttf') format('truetype'), url('../assets/font/font_h1fz4ogaj5cm1jor.svg#iconfont') format('svg');
}
.demo-icon {
  font-family: 'vux-demo';
  font-size: 20px;
  color: #09bb07;
}
.demo-icon-big {
  font-size: 28px;
}
.demo-icon:before {
  content: attr(icon);
}

.box {
  padding: 0 15px;
}
.demo1-item {
  border: 1px solid #ececec;
  padding: 5px 15px;
}
.demo1-item-selected {
  border: 1px solid green;
}
.demo2-item {
  width: 40px;
  height: 40px;
  border: 1px solid #ccc;
  display: inline-block;
  border-radius: 50%;
  line-height: 40px;
  text-align: center;
}
.demo2-item-selected {
  border-color: green;
}
.demo3-item {
  padding: 5px 5px;
  font-size: 0;
}
.demo3-item-selected {
  outline: 1px solid #8B8AEE;
}
.demo4-item {
  background-color: #ddd;
  color: #222;
  font-size: 14px;
  padding: 5px 10px;
  margin-right: 10px;
  line-height: 18px;
  border-radius: 15px;
}
.demo4-item-selected {
  background-color: #FF3B3B;
  color: #fff;
}
.demo4-item-disabled {
  color: #999;
}
.demo5-item {
  width: 70px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  border-radius: 3px;
  border: 1px solid #ccc;
  background-color: #fff;
  margin-right: 6px;
}
.demo5-item-selected {
  background: #ffffff url(../assets/active.png) no-repeat right bottom;
  border-color: #ff4a00;
}
</style>