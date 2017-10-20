<template>
  <div>
    <search ref="search" 
            @on-submit="onSubmit"
            @on-focus="onFocus" 
            @on-cancel="onCancel"
            :auto-fixed="false"></search>
    <divider>时间选择</divider>
    <checker default-item-class="demo5-item" selected-item-class="demo5-item-selected">
      <checker-item v-for="(i,index) in ['三天内', '一周内', '一个月内', '更多时间']" :key="index" :value="index">{{i}}</checker-item>
    </checker>            
    <divider>区域选择</divider>
    <divider>类别选择</divider>
  </div>
</template>

<script>
import { Checker, CheckerItem, Divider, Search } from 'vux'

export default {
  components: {
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
      showSpace: false,
      count: 0
    }
  },
  methods: {
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