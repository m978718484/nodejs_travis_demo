<template>
  <div>
    <group-title>3 columns</group-title>
    <grid>
      <grid-item link="/component/cell" label="跳转到主页">
        <img slot="icon" src="../assets/home.png">
      </grid-item>
      <grid-item :link="{ path: '/component/cell'}" label="跳转到主页">
        <img slot="icon" src="../assets/home.png">
      </grid-item>
      <grid-item link="/component/cell" @on-item-click="onItemClick">
        <img slot="icon" src="../assets/home.png">
        <span slot="label">跳转到主页</span>
      </grid-item>
    </grid>
  </div>
</template>
<script>
import { Grid, GridItem, GroupTitle } from 'vux'
export default {
  components: {
    Grid,
    GridItem,
    GroupTitle
  },
  methods: {
    onItemClick () {
      console.log('on item click')
    }
  }
}
</script>