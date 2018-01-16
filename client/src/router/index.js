import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/HelloWorld'
import Register from '@/components/Register'
import Home from '@/components/Home'
import MyPost from '@/components/MyPost'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/mypost/:id',
      name: 'MyPost',
      component: MyPost
    }
  ]
})
