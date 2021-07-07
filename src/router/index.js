import Vue from 'vue'
import VueRouter from 'vue-router'

// SUBROTAS DA VISUALIZAÇÃO DE OBJETOS
import ViewNull from '../components/_exibicaoDeObjetos/ViewNull.vue'
import ViewFaleConoscoInterno from '../components/_exibicaoDeObjetos/_Marketing/faleConoscoInterno/formFaleConoscoInterno.vue'
import CreateLead from '../components/_exibicaoDeObjetos/_Marketing/faleConoscoInterno/CreateFaleConoscoInterno.vue'
import EventosMKT from '../components/_exibicaoDeObjetos/_Marketing/eventosmkt/eventosMKT.vue'
import Mesa from '../components/_exibicaoDeObjetos/_Desenvolvimento/mesa.vue'
import CreateMesa from '../components/_exibicaoDeObjetos/_Desenvolvimento/CreateMesa.vue'
import ViewDeAnalytics1 from '../components/_exibicaoDeObjetos/_Analytics/ViewAnalytics_1.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/explorer',
    name: 'Explorer',
    component: () => import('../views/Explorer.vue'),
    children:[
      { path:'/', name: 'null', component: ViewNull },
      { path:'/leads', name: 'leads', component: ViewFaleConoscoInterno  },
      { path:'/createleads', name: 'createleads', component: CreateLead  },
      { path:'/eventosmkt', name: 'eventosmkt', component: EventosMKT  },
      { path:'/mesa', name: 'mesa', component: Mesa  },
      { path:'/createMesa', name: 'createMesa', component: CreateMesa  },
      { path:'/analyticsconfig', name: 'analyticsconfig', component: ViewDeAnalytics1  },
    ]
  },
  {
    path: '/analytics',
    name: 'Analytics',
    component: () => import('../views/Analytics.vue'),
    children:[
      { path:'/analytics', name: 'analytics', component: ViewDeAnalytics1  },
    ]
  },
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
