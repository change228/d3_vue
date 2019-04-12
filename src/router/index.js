import Vue from 'vue'
import Router from 'vue-router'
import ChartForce from '@/components/ChartForce'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ChartForce',
      component: ChartForce
    }
  ]
})
