import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/router/Home'
import City from '@/router/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    }, {
      path: '/city',
      component: City
    }
  ]
})
