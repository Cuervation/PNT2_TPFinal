<template >

  <section >
    <div v-bind:style="fondoImage" >
      <Header  />
      <div id="contenedor" >
        <button class="btn btn-info my-3 mr-3" @click="goRanking()">Ir al ranking</button>
        <button class="btn btn-info my-3 mr-3" @click="goRosco()">Jugar!</button>          
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
          backgroundImage: `url(${require('../assets/img/pasapalabra.webp')})`
        };
    }
    },
}


</script>

<style scoped lang="css"> 
  .jumbotron {
    background-color: rgb(240, 15, 15);
    color: rgb(240, 239, 243);
    padding: 0;    
  }
  #contenedor{
  position: absolute;
  bottom: 0;  
  right: 0;
}

</style>
