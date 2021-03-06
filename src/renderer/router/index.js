import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'clock-page',
      component: require('@/pages/mainPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
