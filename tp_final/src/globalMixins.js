import Vue from 'vue'

const miMixinGlobal = {
    methods: {
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