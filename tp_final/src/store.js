import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        nombre : '',
        edad : '',
        puntaje : 0
    },
    actions : {
        setNombreEdad({commit},nombre,edad) {                             
            commit('cargarNombre', nombre)
            commit('cargarEdad', edad)
            },       
        setPuntaje({commit},puntaje) {                             
            commit('cargarPuntaje', puntaje)            
            },                   
    },
    mutations : {
        cargarNombre(state, nombre) {            
            state.nombre = nombre
        },
        cargarEdad(state, edad) {            
            state.edad = edad
        },        
        cargarPuntaje(state, puntaje) {            
            state.puntaje = puntaje
        },         
    }
})
