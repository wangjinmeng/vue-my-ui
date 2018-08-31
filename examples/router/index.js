import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'cardMd',
      component: () => import('@/docs/card.md')
    }
  ]
})
