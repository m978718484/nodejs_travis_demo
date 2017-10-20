<template>
  <div>
    <search ref="search" 
            @on-submit="onSubmit"
            @on-focus="onFocus" 
            @on-cancel="onCancel"
            :auto-fixed="false"></search>
  </div>
</template>

<script>
import { Search } from 'vux'

export default {
  components: {
    Search
  },
  mounted () {
    this.$refs.search.setFocus()
  },
  data () {
    return {
      showSpace: false,
      count: 0
    }
  },
  methods: {
    onSubmit (val) {
      window.alert('on submit' + val)
    },
    onCancel () {
      console.log('on cancel')
      this.$router.replace('/icon')
    },
    onFocus () {
      console.log('on focus')
    }
  }
}
</script>
