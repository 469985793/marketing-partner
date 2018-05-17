import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex/store'
import Home from '@/pages/home'
import Login from '@/pages/login'
import Register from '@/pages/register'
import Index from '@/pages/index'
import MarketTask from '@/pages/marketingManage/marketTask'

Vue.use(Router);

const routes=[{
  path: '/home',
  name: 'Home',
  meta: {
    requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
  },
  component: Home,
  children: [
    {
      path: 'index',
      component: Index,
      name:'Index'
    },{
      path:':id',
      name:'marketTask',
      component:MarketTask ,
    }
  ]},
  {
    path: '/',
    component: Login
  },{
    path: '/login',
    name: 'Login',
    component: Login
  },{
    path: '/register',
    name: 'Register',
    component: Register
  }
];

const router = new Router({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {

    if (store.state.user.userToken) {
      next();
    }else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  }else {
    next();
  }
});

export default router;
