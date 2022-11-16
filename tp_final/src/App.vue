<template>
  <div class="container-fluid mt-3">
    <div class="jumbotron">
      <h1>Bienvenidos a Vue CLI</h1>
      <br>

      <Inicio />      

    </div>
  </div>
</template>

<script>
import Inicio from './componentes/Inicio.vue'

export default {
  name: 'App',
  components: {
    Inicio
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
