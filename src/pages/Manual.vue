<template>
  <div class="container">
   <div class="space-btn">操作指南</div>
   <show-image :list="mylist"></show-image>
  </div>
</template>	
<script>
import ShowImage from '../components/ShowImage.vue'

export default {
  data () {
    return {
      mylist: [
        { title: '操作手册', value: '2017-3-15', src: 'static/image/m-czsc.png' },
        { title: '转让项目投标方操作流程', value: '2017-3-28', src: 'static/image/m-zr-auctor-process.png' },
        { title: '转让项目转让方操作流程', value: '2017-3-28', src: 'static/image/m-zr-bid-process.png' },
        { title: '常见问题', value: '2017-3-28', src: 'static/image/fqa.png' }
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