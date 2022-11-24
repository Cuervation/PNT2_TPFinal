<template >

  <section >
    <div v-bind:style="fondoImage" >
      <Header  />
      <div id="contenedor" >
        <button class="btn btn-info my-3 mr-3 botonazo" @click="goRanking()">Ir al ranking</button>
        <button class="btn btn-info my-3 mr-3 botonazo" @click="goRosco()">Jugar!</button>          
      </div>     
    </div>     
  </section>

</template>

<script >
  import Header from './Header.vue'
  export default  {
    name: 'src-componentes-pantalla',
    components: {
      Header,    
    },    
    props: [],
    mounted () {
    
    },    
    data () {
      return {

      }
    },
    methods: {
 
    },
    computed: {
      fondoImage() {
         return {
          //backgroundImage: `url(${require('../assets/img/pasapalabra.webp')})`
          
        }; 
    }
    },
}


</script>

<style lang="css" src="../assets/css/pantalla.css"> 
.btn-info {
    font-size: 4em;
    height: 100px;
 
}  

</style>
