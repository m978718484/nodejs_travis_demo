// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuexI18n from 'vuex-i18n'
import { AlertPlugin, ToastPlugin } from 'vux'

Vue.use(vuexI18n.plugin, store)
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
