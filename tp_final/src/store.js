import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        nombre : '',
        edad : '',
    },
    actions : {
        setNombreEdad({commit},nombre,edad) {                             
            commit('obtenerNombre', nombre)
            commit('obtenerEdad', edad)
            },       
    },
    mutations : {
        obtenerNombre(state, nombre) {            
            state.nombre = nombre
        },
        obtenerEdad(state, edad) {            
            state.edad = edad
        },        
    }
})
