import Vue from 'vue'

const miMixinGlobal = {
    methods: {
        async getFinalizar(url) {
            try {
              await this.axios.get(url);
            } catch (error) {
              console.log("No pasa nada con el finalizar", error.message);
            }
          },
        
        goRanking(){
            this.$router.push({ path: "/ranking" });
          },
        goRosco(){
        this.$router.push({ path: "/rosco" })
        },
        goPantalla(){
            this.$router.push({ path: "/pantalla" })
            },
        goFinal(){
            this.$router.push({ path: "/final" })
            }   ,

        goInicio(){
            this.$router.push({ path: "/inicio" })
            }   ,            
        async getPuntaje(url) {
            try {
                console.log(url)
                let { data } = await this.axios.get(url);                
                const puntaje = data.Acertadas;  
                await this.$store.dispatch(
                    "setPuntaje",
                    puntaje)             
            } catch (error) {
                console.error(error.message);
            }
            },                               
    },
    computed: {

    }    
}

Vue.mixin(miMixinGlobal)