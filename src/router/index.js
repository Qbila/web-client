import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/GuestLanding'
import Auth from '../views/auth'
// import ForgotPassword from '../views/auth/ForgotPassword'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
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
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth,
      children: [
        {
          path: 'forgot-password',
          name: 'forgot-password',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "forgot-password" */ '../views/auth/ForgotPassword.vue')
        },
        {
          path: 'reset-password',
          name: 'reset-password',
          component: () => import(/* webpackChunkName: "reset-password" */ '../views/auth/ResetPassword.vue')
        }
      ]
    }
  ]
})
