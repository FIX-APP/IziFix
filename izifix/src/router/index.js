import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: () => import("../../fixing/pages/register.component.vue"),
    },
    {
      path: "/solicitud",
      name: "solicitud",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../../fixing/pages/solicitud-servicio.component.vue"),
     },
     {
      path: '/register',
      name: 'register',
      component: () => import("../../fixing/pages/register.component.vue"),
    },
    {
      path: '/booking',
      name: 'booking',
      component: () => import("../../fixing/pages/booking.vue"),
    },
  ]
})

export default router
