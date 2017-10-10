<template>
  <div>
    <group-title>3 columns</group-title>
    <grid>
      <grid-item link="/component/cell" label="公告">
        <img slot="icon" src="../assets/home.png">
      </grid-item>
      <grid-item :link="{ path: '/component/cell'}" label="转让项目">
        <img slot="icon" src="../assets/home.png">
      </grid-item>
      <grid-item link="/component/cell" @on-item-click="onItemClick">
        <img slot="icon" src="../assets/home.png">
        <span slot="label">转让结果</span>
      </grid-item>
    </grid>
    <grid>
      <grid-item link="/component/cell" label="招标项目">
        <img slot="icon" src="../assets/home.png">
      </grid-item>
      <grid-item :link="{ path: '/component/cell'}" label="中标结果">
        <img slot="icon" src="../assets/home.png">
      </grid-item>
      <grid-item link="/component/cell" @on-item-click="onItemClick">
        <img slot="icon" src="../assets/home.png">
        <span slot="label">关于我们</span>
      </grid-item>
    </grid>
    <marquee>
      <marquee-item v-for="i in asyncCount" :key="i" @click.native="onClick(i)" class="align-middle">hello world {{i}}</marquee-item>
    </marquee>
  </div>
</template>
<script>
import { Grid, GridItem, GroupTitle, Cell, Marquee, MarqueeItem } from 'vux'

export default {
  data () {
    return {
      asyncCount: 0
    }
  },
  components: {
    Grid,
    GridItem,
    GroupTitle,
    Cell,
    Marquee,
    MarqueeItem
  },
  mounted () {
    setTimeout(() => {
      this.asyncCount = 5
    }, 1000)
  },
  methods: {
    onItemClick () {
      console.log('on item click')
    },
    onClick (i) {
      console.log(i)
    }
  }
}
</script>