<template>
  <div>
    <group>
      <div v-for="(item, index) in mylist">
        <cell @click.native="onclick('show-image' + index)" :title="item.title" :value="item.value"></cell>
        <div v-transfer-dom>
          <popup :id="'show-image' + index" position="left" width="100%">
            <div class="position-horizontal-demo">
              <img :src="item.src" style="width:100%;height:100%">
              <div class="side-bar" @click="onclick('show-image' + index)"> 
                返回
              </div>
            </div>
          </popup>
        </div>  
      </div>
    </group>
  </div>
</template>
<script>
import { TransferDom, Popup, Cell, Group } from 'vux'

export default {
  name: 'ShowImage',
  directives: {
    TransferDom
  },
  data () {
    return {
      mylist: this.list
    }
  },
  methods: {
    onclick (index) {
      var display = document.getElementById(index).style.display
      if (display) {
        document.getElementById(index).style.display = ''
      } else {
        document.getElementById(index).style.display = 'none'
      }
    }
  },
  components: {
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
  }
}
</script>
<style scoped>
.side-bar {width: 35px;position: fixed;top: 15px;right: 5px;line-height: 0;z-index: 100;}
</style>