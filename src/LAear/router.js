import Vue from 'vue'
import Router from 'vue-router'
import Example from './demo.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Example',
      component: Example
    }
  ]
})
