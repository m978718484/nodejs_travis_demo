<template>
  <div class="container">
		<iframe ref="iframe" src="static/html/m-czsc.html"></iframe>
  </div>
</template>	
<script>
import { TransferDom, Popup, Cell, XButton, XSwitch, Group } from 'vux'

export default {
  directives: {
    TransferDom
  },
  data () {
    return {
      show7: false,
      htmlData: '<button v-el:button v-on:click="click">click me</button>'
    }
  },
  components: {
    Cell,
    Popup,
    XSwitch,
    XButton,
    Group
  }
}
</script>
