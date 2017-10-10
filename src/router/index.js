import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Vux from '@/components/Vux'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/vux',
      name: 'Vux',
      component: Vux
    }
  ]
})
