import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const delay = ms => new Promise( (resolve, reject) => {
    if(typeof ms == 'number') {
        setTimeout(resolve,ms)
    }
    else {
        reject('ms no es un número')
    }
})

export default new Vuex.Store({
    state : {
        nombre : '',
        edad : '',
    },
    actions : {
        contarDown({commit},cant) {
            console.warn('actions -> contarDown', cant, new Date().toLocaleString())    
            setTimeout(() => {
                commit('decrementar', cant)        
            },2000)
        },
        async contarUp({commit},cant) {
            console.warn('actions -> contarUp', cant, new Date().toLocaleString())    
            try {
                await delay(1000)
                commit('incrementar', cant)        
            }
            catch(error) {
                console.error(error)
            }
        }        
    },
    mutations : {
        decrementar(state, cant) {
            console.warn('mutations -> decrementar', cant, new Date().toLocaleString()) 
            state.contador -= cant
        },
        incrementar(state, cant) {
            console.warn('mutations -> incrementar', cant, new Date().toLocaleString()) 
            state.contador += cant
        }        
    }
})
