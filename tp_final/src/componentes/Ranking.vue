<template >
  <section class="src-componentes-ranking  mt-3">
    <div class="row d-flex justify-content-center">
      <div class="jumbotron col-md-6">        
        <div class="row">
          <div class="col-md-8 text-center">
            <h1>Ranking Pasapalabra</h1>
          </div>
          <div class="col-md-4">
            <button class="btn btn-info my-3 mr-3" @click="goPantalla()">Volver!</button>          
          </div>
        </div>
        <hr>             
        <div class="row text-center">   
        <div v-if="ranking.length" class="table-responsive">
          <table class="table">
            <tr>
              <th>Nombre</th>
              <th>Puntaje</th>
              <th>Fecha</th>
            </tr>
            <tr v-for="(ranking, index) in ranking" :key="index">
              <td>{{ ranking.nombre }}</td>
              <td>{{ ranking.puntaje }}</td>
              <td>{{ ranking.fecha }}</td>
            </tr>
          </table>
        </div>        
        <h4 v-else class="alert alert-danger text-center">
          No se encuentran jugadores rankeados
        </h4>
        </div>
      </div>
    </div>
  </section>
</template>

<script >
export default {
  name: "src-componentes-ranking",
  props: [],
  mounted() {
    this.getRanking();
  },
  data() {
    return {
      ranking: [],
      url: "http://localhost:8080/getRanking/",
    };
  },
  methods: {
    async getRanking() {
      try {
        let { data } = await this.axios(this.url);
        this.ranking = data;
      } catch (error) {
        console.error("Error en getRanking", error.message);
      }
    },
  },
  computed: {},
};
</script>

<style scoped lang="css">
.jumbotron {
  background-color: rgb(168, 170, 206);
  color: rgb(240, 239, 243);
  padding: 0;
}
</style>

