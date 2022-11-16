import Vue from 'vue'
import VueRouter from 'vue-router'

import Inicio from './componentes/Inicio.vue'
import Rosco from './componentes/Rosco.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', redirect: '/inicio' },
        { path: '/inicio', component: Inicio },
        { path: '/rosco', component: Rosco },
    ]
})

