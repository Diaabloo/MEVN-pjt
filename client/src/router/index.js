import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import LogIn from '../components/auth/LogIn.vue'
import RegisterUser from '../components/auth/RegisterUser.vue'
import PharmacieDash from '../components/role/Pharmacie/PharmacieDash.vue'
import InfirmierDash from '../components/role/Inf/InfirmierDash.vue'
import AdjointDash from '../components/role/Adjoint/AdjointDash.vue'
import AdminDash from '../components/role/Admin/AdminDash.vue'
import IngenieurDash from '../components/role/Ingenieur/IngenieurDash.vue'
import MedcinDash from '../components/role/Medcin/MedcinDash.vue'
import TechniDsh from '../components/role/Techni/TechniDsh.vue'


import Forgot from '../components/auth/Forgot.vue'
// import RestPassword from '../components/RestPassword.vue'
// import SuccessPassword from '../components/SuccessPassword.vue'

const routes = [
  { path: '/',
    name:'Home',
    component: HomePage
  },
  { path: '/login',
    name: 'Login',
    component: LogIn
  },
  {
    path: '/register',
    name:'Register',
    component: RegisterUser
  },
  {
    path: '/pharmacie-dashboard',
    name:'Pharmacie',
    component: PharmacieDash
  },
  {
    path: '/adjoint-dashboard',
    name:'Adjoint',
    component: AdjointDash
  },
  {
    path: '/infirmier-dashboard',
    name:'Infirmier',
    component: InfirmierDash
  },
  {
    path: '/admin-dashboard',
    name:'Admin',
    component: AdminDash
  },
  {
    path: '/ingenieur-dashboard',
    name:'Ingenieur',
    component:IngenieurDash
  },
  {
    path: '/medcin-dashboard',
    name:'Medcin',
    component:MedcinDash
  },
  {
    path: '/techni-dashboard',
    name:'Technicien',
    component:TechniDsh
  },
  {
    path: '/forgot',
    name:'Forgot',
    component: Forgot
  },
  // {
  //   path: '/RestPassword',
  //   name:'Rest',
  //   component: RestPassword
  // },
  // {
  //   path: '/SuccessPassword',
  //   name:'Success',
  //   component: SuccessPassword
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
