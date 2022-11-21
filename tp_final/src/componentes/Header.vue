<template >

  <section class="src-componentes-header">
     <div class="jumbotron">      
        <div class="row">
          <div class="col-md-12">
            <h1>Jugador : {{  $store.state.nombre  }} Puntaje {{ $store.state.puntaje }}</h1>      
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
  .jumbotron {
    background-color: rgb(195, 195, 243);
    color: rgb(247, 7, 7);
  }

  h1 {
    text-align: right
  }
</style>
