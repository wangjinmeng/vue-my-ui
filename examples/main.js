// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MyUi from '../src/index'
import 'packages/style/index.scss'
import demoBlock from './components/demo-block.vue'

Vue.component('demo-block', demoBlock)
Vue.use(MyUi)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
