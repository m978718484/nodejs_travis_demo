<template>
  <div>
    <group>
      <cell title="我的账号" @click.native="onClick"></cell>
    </group>

    <group>
      <cell is-link>
        <span slot="title" style="color:green;"><span style="vertical-align:middle;">消息</span> <badge text="2"></badge></span>
      </cell>
      <cell title="通知" is-link></cell>
    </group>
    <group>
      <cell
      title="已报名"
      is-link
      :border-intent="false"
      :arrow-direction="showContent001 ? 'up' : 'down'"
      @click.native="showContent001 = !showContent001"></cell>

      <p class="slide" :class="showContent001?'animate':''">blablabla...<br/>blablabla...<br/>blablabla...<br/>blablabla...</p>
      <cell
      title="历  史"
      is-link
      :border-intent="false"
      :arrow-direction="showContent004 ? 'up' : 'down'"
      @click.native="showContent004 = !showContent004"></cell>

      <p class="slide" :class="showContent004?'animate':''">blablabla...<br/>blablabla...<br/>blablabla...<br/>blablabla...</p>
    </group>
    <group>
      <x-switch title="通知" v-model="Notifications"></x-switch>
      <!-- <cell title="通知" value="已开启"></cell> -->
    </group>
  </div>
</template>
<script>
import { Cell, CellBox, XSwitch, CellFormPreview, Group, Badge } from 'vux'
export default {
  mounted () {
    setTimeout(() => {
      this.money = -1024
    }, 2000)
  },
  components: {
    Group,
    Cell,
    CellFormPreview,
    XSwitch,
    CellBox,
    Badge
  },
  methods: {
    onClick () {
      console.log('on click')
    }
  },
  data () {
    return {
      list: [{
        label: 'Apple',
        value: '3.29'
      }, {
        label: 'Banana',
        value: '1.04'
      }, {
        label: 'Fish',
        value: '8.00'
      }],
      Notifications: true,
      showContent001: false,
      showContent002: false,
      showContent003: false,
      showContent004: false
    }
  }
}
</script>

<style scoped>
.sub-item {
  color: #888;
}
.slide {
  padding: 0 20px;
  overflow: hidden;
  max-height: 0;
  transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
}
.animate {
  max-height: 9999px;
  transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
  transition-delay: 0s;
}
</style>