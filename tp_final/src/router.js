import Vue from 'vue'
import VueRouter from 'vue-router'

import Inicio from './componentes/Inicio.vue'
import Pantalla from './componentes/Pantalla.vue'
import Rosco from './componentes/Rosco.vue'
import Header from './componentes/Header.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', redirect: '/inicio' },
        { path: '/inicio', component: Inicio },
        { path: '/rosco', component: Rosco },
        { path: '/pantalla', component: Pantalla },
        { path: '/header', component: Header },
    ]
})

