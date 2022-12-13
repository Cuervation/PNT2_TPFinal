<template >

  <section class="src-componentes-header">
     <div class="jumbotron">      
        <div class="row">
          <div class="col-md-12">
            <h1>Jugador : {{  $store.state.nombre  | pasarAMayuscula }}   -  Puntaje {{ $store.state.puntaje }}</h1>      
          </div>
        </div>        
     </div>    

  </section>

</template>

<script >

  export default  {
    name: 'src-componentes-header',
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

    }
}


</script>

<style scoped lang="css">
  @import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');
  .jumbotron {
    /* background-color: rgb(78, 78, 238); */
    color: rgb(255, 255, 255);
    /* background-image: linear-gradient(to right top, #016bd6, #257cde, #3e8de5, #559eeb, #6caef0); */
    background-image: linear-gradient(to right top, #016bd6, #257cde, #3e8de5, #559eeb, #6caef0);
    font-family: 'Patrick Hand', cursive;
    
  }

  h1 {
    text-align: right;
    font-size: 4em;
  }
</style>
