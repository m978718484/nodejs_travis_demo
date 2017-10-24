import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Vux from '@/components/Vux'
import Icon from '@/components/Icon'
import T from '@/components/T'
import Search from '@/components/Search'

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
    },
    {
      path: '/icon',
      name: 'Icon',
      component: Icon
    },
    {
      path: '/t/:id',
      name: 'T',
      component: T
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
