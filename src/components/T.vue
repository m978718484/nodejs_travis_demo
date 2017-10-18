<template>
  <div>
    <div style="margin: 10px;overflow: hidden;" v-for="item in list">
      <masker style="border-radius: 2px;">
        <div class="m-img" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
        <div slot="content" class="m-title">
          {{item.title}}
          <br/>
          <span class="m-time">2016-03-18</span>
        </div>
      </masker>
    </div>
    <div style="margin: 10px;overflow: hidden;">
      <masker style="border-radius: 2px;" :opacity="0.8">
        <div class="m-img" style="background-image:url(http://www.srmmx.com/upload/AuctionPicture/2017/9/12/8d8ac6cc-8a2e-4526-95d2-8c3312f3830e.jpg)"></div>
        <div slot="content" class="m-title">
          VUX
          <br/>
          <span class="m-time">2016-03-18</span>
        </div>
      </masker>
    </div>
  </div>
</template>

<script>
import { Masker } from 'vux'
export default {
  components: {
    Masker
  },
  data () {
    return {
      list: [{
        title: '（Universal/环球）自动贴片机、锡膏印刷机、SONY检查机等共21台SMT汰旧设备转让',
        img: 'http://www.srmmx.com/upload/AuctionPicture/2017/9/18/0551c821-45a9-4224-aec8-56793d1bc902.jpg'
      }, {
        title: '美容用品 & 日用品（上）',
        img: 'http://www.srmmx.com/upload/AuctionPicture/2017/9/26/ddd34e1b-465f-43be-9b0a-5f8d91c588de.jpg'
      }, {
        title: '远离车内毒气，日本车载空气净化器精选',
        img: 'http://www.srmmx.com/upload/AuctionPicture/2017/9/18/e578035f-df0b-406c-92f8-4ccde75c3f4f.jpg'
      }]
    }
  }
}
</script>

<style lang="less">
.m-img {
  padding-bottom: 33%;
  display: block;
  position: relative;
  max-width: 100%;
  background-size: cover;
  background-position: center center;
  cursor: pointer;
  border-radius: 2px;
}
.m-title {
  color: #fff;
  text-align: center;
  text-shadow: 0 0 2px rgba(0, 0, 0, .5);
  font-weight: 500;
  font-size: 16px;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
}
.m-time {
  font-size: 12px;
  padding-top: 4px;
  border-top: 1px solid #f0f0f0;
  display: inline-block;
  margin-top: 5px;
}
</style>