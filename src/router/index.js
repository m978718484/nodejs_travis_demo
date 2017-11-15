import Vue from 'vue'
import Router from 'vue-router'
import User from '@/components/User'
import NoticeList from '@/components/NoticeList'
import Index from '@/components/Index'
import T from '@/components/T'
import Search from '@/components/Search'
import NoticeDetail from '@/components/NoticeDetail'

import Manual from '@/pages/Manual'
import Rule from '@/pages/Rule'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/noticelist',
      name: 'NoticeList',
      component: NoticeList
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
    },
    {
      path: '/noticedetail',
      name: 'NoticeDetail',
      component: NoticeDetail
    },
    {
      path: '/manual',
      name: 'Manual',
      component: Manual
    },
    {
      path: '/rule',
      name: 'Rule',
      component: Rule
    }
  ]
})
