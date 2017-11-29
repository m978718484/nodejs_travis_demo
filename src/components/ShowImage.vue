<template>
  <div>
    <group>
      <div v-for="(item, index) in mylist">
        <cell @click.native="show(index)" :title="item.title" :value="item.value"></cell>
      </div>
    </group>
    <div v-transfer-dom>
      <previewer :list="mylist" ref="previewer"></previewer>
    </div>
  </div>
</template>
<script>
import { Previewer, TransferDom, Popup, Cell, Group } from 'vux'

export default {
  name: 'ShowImage',
  directives: {
    TransferDom
  },
  methods: {
    show (index) {
      this.$refs.previewer.show(index)
    }
  },
  components: {
    Previewer,
    Popup,
    Cell,
    Group
  },
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      mylist: this.list
    }
  }
}
</script>
<style scoped>
.side-bar {width: 35px;position: fixed;top: 15px;right: 5px;line-height: 0;z-index: 100;}
</style>