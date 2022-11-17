<template>
  <div class="container-fluid mt-3">
    <div class="jumbotron">
      <h1>Bienvenidos a Vue CLI</h1>
      <br>

      <NavBar />            
      <router-view></router-view>

    </div>
  </div>
</template>

<script>
import NavBar from './componentes/NavBar.vue'
//import Pantalla from './componentes/Pantalla.vue'

export default {
  name: 'App',
  components: {
    NavBar//,Pantalla
    
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
