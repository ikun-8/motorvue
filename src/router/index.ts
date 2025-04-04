import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [

  {
    path: '/gaver',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/gaver/Home.vue'),
    children:[
      {
        path:"msg",
        component:()=>import('../views/gaver/Msg.vue')
      },
      {
        path:"user",
        component:()=>import('../views/gaver/User.vue'),
      },
      {
        path:"address",
        component:()=>import('../views/gaver/Address.vue')
      },
      {
        path:"card",
        component:()=>import('../views/gaver/Card.vue')
      },
      {
        path:"orders",
        component:()=>import('../views/gaver/Orders.vue')
      },
      {
        path:"product",
        component:()=>import('../views/gaver/Product.vue')
      },
      
      
    ]
    
  },
  {
    path:'/login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path:'/reg',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path:'/',
    component: () => import(/* webpackChunkName: "about" */ '../views/Index.vue'),
   
  },
  {
    path:'/home',
    component: () => import(/* webpackChunkName: "about" */ '../views/front/Home.vue'),
    redirect:"/home/index",
    children:[
      {
        path:'index',
        component: () => import(/* webpackChunkName: "about" */ '../views/front/index.vue')

      },
      {
        path:'sale',
        component: () => import(/* webpackChunkName: "about" */ '../views/front/sale.vue')

      },
      {
        path:'search',
        component: () => import(/* webpackChunkName: "about" */ '../views/front/search.vue')

      },
      {
        path:'active',
        component: () => import(/* webpackChunkName: "about" */ '../views/front/active.vue')

      },
      {
        path:'my',
        component: () => import(/* webpackChunkName: "about" */ '../views/front/my.vue')

      },
      {
        path:'rank',
        component: () => import(/* webpackChunkName: "about" */ '../views/front/rank.vue')

      },
      {
        path:'mes',
        component: () => import(/* webpackChunkName: "about" */ '../views/front/mes.vue'),
        meta: { hideTabBar: true }

      },
      {
        path:'mymes',
        component: () => import(/* webpackChunkName: "about" */ '../views/front/mymes.vue'),
        meta: { hideTabBar: true }

      },
      {
        path:'myfans',
        component: () => import(/* webpackChunkName: "about" */ '../views/front/myfans.vue'),
        meta: { hideTabBar: true }

      },
      {
        path:'details',
        component: () => import(/* webpackChunkName: "about" */ '../views/front/details.vue'),
        meta: { hideTabBar: true }

      },
      {
        path:'talk',
        component: () => import(/* webpackChunkName: "about" */ '../views/front/talk.vue'),
        meta: { hideTabBar: true }

      },
      {
        path:'xtmes',
        component: () => import(/* webpackChunkName: "about" */ '../views/front/xtmes.vue'),
        meta: { hideTabBar: true }

      },
      {
        path:'yymes',
        component: () => import(/* webpackChunkName: "about" */ '../views/front/yymes.vue'),
        meta: { hideTabBar: true }

      },
      {
        path:'zlsetting',
        component: () => import(/* webpackChunkName: "about" */ '../views/front/zlsetting.vue'),
      },
      {
        path:'center',
        component: () => import(/* webpackChunkName: "about" */ '../views/front/center.vue'),
        meta: { hideTabBar: true }

      },
      {
        path:'point',
        component: () => import(/* webpackChunkName: "about" */ '../views/front/point.vue'),
        meta: { hideTabBar: true }

      },
      {
        path:'myactive',
        component: () => import(/* webpackChunkName: "about" */ '../views/front/myactive.vue'),

      },
      {
        path:'mysale',
        component: () => import(/* webpackChunkName: "about" */ '../views/front/mysale.vue'),

      },
      {
        path:'collect',
        component: () => import(/* webpackChunkName: "about" */ '../views/front/collect.vue'),

      },
      {
        path:'salecar',
        component: () => import(/* webpackChunkName: "about" */ '../views/front/salecar.vue'),

      },
      {
        path:'release',
        component: () => import(/* webpackChunkName: "about" */ '../views/front/release.vue'),

      },
      {
        path:'toOrder',
        component: () => import(/* webpackChunkName: "about" */ '../views/front/order.vue'),

      },
      
 
    ]
   
  },  
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
