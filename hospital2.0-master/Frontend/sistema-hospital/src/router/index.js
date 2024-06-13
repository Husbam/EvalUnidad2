import { createRouter, createWebHistory } from 'vue-router'
import loginView from '@/components/login.vue'
import registerUser from '@/components/registerUser.vue'
import dashboard from '@/components/dashboard.vue'
import registerP from '@/components/registerPersona.vue'
import register from '@/components/register.vue'
import cita from '@/components/citas.vue'
import listarCitas from '@/components/listarCitas.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: loginView
    },  
    {
      path: '/registerUser',
      name: 'register User',
      component: registerUser
    },
    {
      path: '/registerP',
      name: 'registerP',
      component: registerP
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard,
      children:[
        {path:'/registerP', name: 'personas',component:registerP},
        {path:'/cita', name:'cita', component:cita},
        {path:'/listarCitas', name:'listarCitas', component:listarCitas}
        
      ]
    }
    
  ]
})

export default router
