<template >

  <section class="src-componentes-pantalla">
     <Header  />

     
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

    }
}


</script>

<style scoped lang="css">
  .src-componentes-pantalla {
      background-image: url("../assets/img/pasapalabra.jfif");
  }
  .jumbotron {
    background-color: rgb(240, 15, 15);
    color: rgb(240, 239, 243);
    padding: 0;    
  }


</style>
