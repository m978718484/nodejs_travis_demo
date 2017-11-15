<template>
  <div class="container">
	 <group>
	    <div @click="show1 = true"><cell title="操作手册" value="2017-3-15"></cell></div>
	    <div @click="show2 = true"><cell title="转让项目投标方操作流程" value="2017-3-28"></cell></div>
	    <div @click="show3 = true"><cell title="转让项目转让方操作流程" value="2017-3-28"></cell></div>
	    <div @click="show4 = true"><cell title="常见问题" value="2017-3-28"></cell></div>
	  </group>
    
    <div v-transfer-dom>
      <popup v-model="show1" position="left" width="100%">
        <div class="position-horizontal-demo" @click="show1 = false">
          <img src="static/image/fqa.png" style="width:100%;height:100%">
        </div>
      </popup>
    </div>

    <div v-transfer-dom>
      <popup v-model="show2" position="left" width="100%">
        <div class="position-horizontal-demo" @click="show2 = false">
          <img src="static/image/m-zr-auctor-process.png" style="width:100%;height:100%">
        </div>
      </popup>
    </div>

    <div v-transfer-dom>
      <popup v-model="show3" position="left" width="100%">
        <div class="position-horizontal-demo" @click="show3 = false">
          <img src="static/image/m-zr-bid-process.png" style="width:100%;height:100%">
        </div>
      </popup>
    </div>

    <div v-transfer-dom>
      <popup v-model="show4" position="left" width="100%">
        <div class="position-horizontal-demo" @click="show4 = false">
          <img src="static/image/fqa.png" style="width:100%;height:100%">
        </div>
      </popup>
    </div>

  </div>
</template>	
<script>
import { TransferDom, Popup, Cell, XButton, XSwitch, Group, Flexbox, FlexboxItem } from 'vux'
import api from '../fetch/index'

export default {
  directives: {
    TransferDom
  },
  data () {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      htmlData: ''
    }
  },
  components: {
    Flexbox,
    FlexboxItem,
    Cell,
    Popup,
    XSwitch,
    XButton,
    Group
  },
  methods: {
    fatchPage (url) {
      api.GetStatic(url)
        .then(res => {
          // console.log(res)
          this.show8 = true
          this.htmlData = res
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
