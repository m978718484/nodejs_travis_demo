<template>
  <div>
    <div style="height:44px;">
      <sticky ref="sticky" :offset="46" :check-sticky-support="false">
        <tab :line-width="1">
          <tab-item v-for="(item,index) in tabTitles" :key="index" :selected=!index @on-item-click="conentChange(index)">{{ item }}</tab-item>
        </tab>
      </sticky>
    </div>
    <p v-for="i in count">{{i}}<br></p>
  </div>
</template>

<script>
import { Tab, TabItem, Sticky } from 'vux'
const list = () => ['最新公告', '行业动态', '政策法规', '综合新闻']
export default {
  components: {
    Tab,
    TabItem,
    Sticky
  },
  data () {
    return {
      showSpace: false,
      count: 0,
      tabTitles: list()
    }
  },
  methods: {
    spaceChange () {
      this.showSpace = !this.showSpace
    },
    conentChange (i) {
      this.$nextTick(() => {
        this.count = i
        this.$refs.sticky.bindSticky()
      })
    }
  }
}
</script>
<style scoped>
  .space-btn {
    padding: 5px 0;
    margin: 10px;
    text-align: center;
    border: 1px red solid;
  }
  .space {
    padding: 30px 0;
    margin: 10px;
    text-align: center;
    border: 1px green solid;
  }
</style>