import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegistrarseView from '../views/RegistrarseView.vue'
import TablaPokemonesView from '@/views/TablaPokemonesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/registrarse',
    name: 'registrarse',
    component: RegistrarseView
  },
  {
    path: '/tablapokemones',
    name: 'tablapokemones',
    component: TablaPokemonesView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
