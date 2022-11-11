import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/shared/general-login.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: '/',
      component: Login
   },
   {
    path: '/login',
    name: 'login',
    component: Login
    },
    {
      path: '/client/:id',
      name:'client',
      component: ()=>import('../components/client/Layout/ClientLayout.vue'),
      children:[
        {
        path:'',
        redirect:{name:'myappliance'}
        },
       {
          path:'myappliance',
          name:'myappliance',
          component: ()=>import(/*webpackChunkName:"MyAppliance"*/'../views/Client/client-my-appliance.vue'),
       },
       
       {
          path:'appointment',
          name:'client-appointment',
          component: ()=>import('../views/Client/client-appointments.vue')
       },
       {
          path:'profile',
          name:'client-profile',
          component: ()=>import(/*webpackChunkName:"Profile"*/'../views/Client/client-profile.vue'),
       },
    ]
   },
   {
      path: '/technician/:id',
      name:'technician',
      component: ()=>import('../components/technician/Layout/ClientLayout.vue'),
      children:[
        {
        path:'',
        redirect:{name:'myappliance'}
        },       
       {
          path:'appointment',
          name:'technician-appointment',
          component: ()=>import('../views/technician/technician-appointments.vue')
       },
       {
          path:'profile',
          name:'technician-profile',
          component: ()=>import(/*webpackChunkName:"Profile"*/'../views/technician/technician-profile.vue'),
       },
    ]
   }
  ]
})

export default router
