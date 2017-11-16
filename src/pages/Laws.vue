<template>
  <div>
    <search ref="search" @on-submit="onSubmit" @on-focus="onFocus" @on-cancel="onCancel" :auto-fixed="false"  placeholder="项目名称、所在地区、所属类别"></search>
    <div style="height:44px;">
      <sticky ref="sticky" :offset="46" :check-sticky-support="false">
        <tab :line-width="1" style="font-weight:bold;width:100%;position:absolute;left:0;z-index:100;">
          <tab-item v-for="(item,index) in tabTitles" :key="index" :selected=!index @on-item-click="conentChange(index)">{{ item }}</tab-item>
        </tab>
      </sticky>
    </div>
     <cell v-for="i in asyncContent[index]" :key="i.index" @click.native="onClick(i)">
      <span slot="title" style="font-size:14px;vertical-align:middle;">
        <span >{{i.content}}</span>
      </span>
    </cell>
  </div>
</template>

<script>
import { Cell, Tab, TabItem, Sticky, Search, Group } from 'vux'
const list = () => ['最近常用', '热门搜索', '区域列表', '类别类表']
export default {
  components: {
    Cell,
    Group,
    Tab,
    TabItem,
    Sticky,
    Search
  },
  mounted () {
    this.$refs.search.setFocus()
    setTimeout(() => {
      this.asyncContent = [[
        { searchType: 0, content: '自动贴片机' },
        { searchType: 0, content: '杭州' },
        { searchType: 0, content: '锡膏印刷机' }],
      [ { searchType: 1, content: '自动贴片机' },
        { searchType: 1, content: '兰考裕富废木料' },
        { searchType: 1, content: '废打包膜' }],
      [ { searchType: 2, content: '南宁' },
        { searchType: 2, content: '杭州' },
        { searchType: 2, content: '云南' }],
      [ { searchType: 3, content: '零星工程' },
        { searchType: 3, content: '专业设备类' },
        { searchType: 3, content: 'SMT' }]
      ]
    }, 500)
  },
  data () {
    return {
      index: 0,
      asyncContent: [],
      tabTitles: list()
    }
  },
  methods: {
    onSubmit (val) {
      window.alert('on submit' + val)
    },
    onCancel () {
      console.log('on cancel')
      this.$router.replace('/search')
    },
    onFocus () {
      console.log('on focus')
    },
    onItemClick () {
      console.log('on item click')
    },
    onClick (item) {
      // this.$router.replace('/noticedetail/' + id)
      console.log(item.searchType, item.content)
    },
    conentChange (i) {
      this.$nextTick(() => {
        this.index = i
        this.$refs.sticky.bindSticky()
      })
    }
  }
}
</script>
