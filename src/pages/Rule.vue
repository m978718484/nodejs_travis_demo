<template>
  <div>
  	<div class="space-btn">业务规则</div>
  	<group>
	    <div @click="show1 = true"><cell title="钜商网采购招标服务平台注册须知" value="2017-3-15"></cell></div>
	    <div @click="show2 = true"><cell title="钜商网采购招标服务平台网络竞价须知" value="2017-3-28"></cell></div>
	    <div @click="show3 = true"><cell title="钜商网转让方资质材料" value="2017-3-28"></cell></div>
	    <div @click="show4 = true"><cell title="钜商网回收方资质材料" value="2017-3-28"></cell></div>
	    <div @click="show5 = true"><cell title="交易合同（模板-供交易双方参考）" value="2017-3-29"></cell></div>
	  </group>

    <div v-transfer-dom @click="show1 = false">
      <popup v-model="show1" position="left" width="100%">
        <div class="position-horizontal-demo">
          <div class="position-horizontal-demo">
            <img src="static/image/sign-up-notice.png" style="width:100%;height:100%">
          </div>
        </div>
      </popup>
    </div>
    <div v-transfer-dom @click="show2 = false">
      <popup v-model="show2" position="left" width="100%">
        <div class="position-horizontal-demo">
          <div class="position-horizontal-demo">
            <img src="static/image/r-wljjxz.png" style="width:100%;height:100%">
          </div>
        </div>
      </popup>
    </div>
    <div v-transfer-dom @click="show3 = false">
      <popup v-model="show3" position="left" width="100%">
        <div class="position-horizontal-demo">
          <div class="position-horizontal-demo">
            <img src="static/image/r-zrfzzcl.png" style="width:100%;height:100%">
          </div>
        </div>
      </popup>
    </div>
    <div v-transfer-dom @click="show4 = false">
      <popup v-model="show4" position="left" width="100%">
        <div class="position-horizontal-demo">
          <div class="position-horizontal-demo">
            <img src="static/image/r-hsfzzcl.png" style="width:100%;height:100%">
          </div>
        </div>
      </popup>
    </div>
    <div v-transfer-dom @click="show5 = false">
      <popup v-model="show5" position="left" width="100%">
        <div class="position-horizontal-demo">
          <div class="position-horizontal-demo">
            <img src="static/image/waste-transaction-contract.png" style="width:100%;height:100%">
          </div>
        </div>
      </popup>
    </div>
  </div>
</template>
<script>
import { TransferDom, Popup, Cell, Group } from 'vux'

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
      show5: false,
      htmlData: '',
      numPages: 0
    }
  },
  components: {
    Popup,
    Cell,
    Group
  }
}
</script>
<style scoped>
.space-btn {
  padding: 0 0;
  margin: 10px;
  text-align: center;
}
</style>