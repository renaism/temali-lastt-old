import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Test from './views/Test.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/test/1',
      component: Test,
      props: { number: 1, type: "sangat kamu banget" }
    },
    {
      path: '/test/2',
      component: Test,
      props: { number: 2, type: "lumayan kamu banget" }
    },
    {
      path: '/test/3',
      component: Test,
      props: { number: 3, type: "sangat nggak kamu banget" }
    },
    {
      path: '/test/4',
      component: Test,
      props: { number: 4, type: "lumayan nggak kamu banget" }
    }
  ]
})
