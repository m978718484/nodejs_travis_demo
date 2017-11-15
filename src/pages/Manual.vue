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
        <div class="position-horizontal-demo">
          <span class="vux-close" @click="show1 = false"></span>
          <br>
          <pdf src="static/czsc.pdf" :page="page" @numPages="numPages = $event"></pdf>
          <br>
          <x-number title="翻页" :fillable="true" width="50%" :min="1" :max="numPages" :value="1" @on-change="change"></x-number>
<!--           <flexbox>
            <flexbox-item><div class="flex-paging" @click="previous">{{ page - 1 }}</div></flexbox-item>
            <flexbox-item><div class="flex-paging" @click="next">{{ page + 1 }}</div></flexbox-item>
          </flexbox> -->
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
import { TransferDom, Popup, Cell, XButton, XSwitch, XNumber, Group, Flexbox, FlexboxItem } from 'vux'
import pdf from 'vue-pdf'

import api from '../fetch/index'

export default {
  directives: {
    TransferDom
  },
  data () {
    return {
      page: 1,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      htmlData: '',
      numPages: 0
    }
  },
  components: {
    XNumber,
    pdf,
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
    },
    next () {
      if (this.page === this.numPages) {
        this.page = 0
      }
      this.page = this.page + 1
      console.log(this.page)
    },
    previous () {
      if (this.page === 1) {
        this.page = this.numPages
      }
      this.page = this.page + 1
      console.log(this.page)
    },
    change (val) {
      if (!val) {
        this.page
      } else {
        this.page = val
      }
    }
  }
}
</script>
<style type="text/css">
.flex-paging {
  text-align: center;
  color: #fff;
  background-color: #20b907;
  border-radius: 4px;
  background-clip: padding-box;
}
</style>