<template>
  <div>
  	<div class="space-btn">业务规则</div>
    <show-image :list="ruleList"></show-image>
  </div>
</template>
<script>
import ShowImage from '../components/ShowImage.vue'

export default {
  data () {
    return {
      ruleList: [
        { title: '钜商网采购招标服务平台注册须知', value: '2017-3-15', src: 'static/image/sign-up-notice.png' },
        { title: '钜商网采购招标服务平台网络竞价须知', value: '2017-3-28', src: 'static/image/r-wljjxz.png' },
        { title: '钜商网转让方资质材料', value: '2017-3-28', src: 'static/image/r-zrfzzcl.png' },
        { title: '钜商网回收方资质材料', value: '2017-3-28', src: 'static/image/r-hsfzzcl.png' },
        { title: '交易合同（模板-供交易双方参考）', value: '2017-3-29', src: 'static/image/waste-transaction-contract.png' }
      ]
    }
  },
  components: {
    ShowImage
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