<template >
  <section class="src-componentes-rosco">
    <div class="jumbotron">
      <h1>src-componentes-rosco Component</h1>
      <div class="card-deck" style="width: 18rem">
        <!-- First Card -->
        <div class="card">
          <div class="card-title">{{ letra }}</div>
        </div>
        <div>{{ pregunta }}</div>

        <vue-form :state="formState" @submit.prevent="getPregunta()">
          <validate tag="div">
            <label for="respuesta">Respuesta</label>
            <input type="text" id="respuesta" class="form-control" autocomplete="off" v-model.trim="formData.respuesta" name="nombre"
              required :minlength="respuestaMinLength" :maxlength="respuestaMaxLength" no-espacios
            />
            <field-messages name="nombre" show="$dirty">
              <div slot="required" class="alert alert-danger mt-1">
                Campo requerido
              </div>
              <div slot="minlength" class="alert alert-danger mt-1">
                Este campo debe poseer al menos
                {{ nombreMinLength }} caracteres.
              </div>
              <div slot="maxlength" class="alert alert-danger mt-1">
                Este campo no debe superar los {{ nombreMaxLength }} caracteres.
              </div>
              <div slot="no-espacios" class="alert alert-danger mt-1">
                Este campo no permite espacios intermedios
              </div>
            </field-messages>
          </validate>        
          <button class="btn btn-danger my-3" :disabled="formState.$invalid">
            Siguiente
          </button>          
              </vue-form>    
          </div>
        </div>
    </section>
</template>

<script>
export default {
  name: "src-componentes-rosco",
  props: [],
  mounted() {
    this.getPregunta();
  },
  data() {
    return {
      url: "http://localhost:8080/pregunta",
      letra: "",
      pregunta: "",
      respuesta: "",
      respuestaMinLength: 2,
      respuestaMaxLength: 25,
      formState: {},
      formData: this.getInitialData(),
    };
  },
  methods: {
        getInitialData() {
      return {
        respuesta: null,

      }
    },  
    async getPregunta() {
      try {
        let { data: preguntas, status: estado } = await this.axios.get(
          this.url
        );
        console.log(preguntas);
        this.letra = preguntas.letra;
        this.pregunta = preguntas.pregunta;
        console.log(preguntas.letra);
        console.log(estado);
      } catch (error) {
        console.log(error.response.status);
        console.log(error.response.data);
        console.error("Error en postUsuario", error.message);
      }
    },
  },
  computed: {},
};
</script>

<style scoped lang="css">
.src-componentes-rosco {
}
.card-title {
  font-size: 135px;
  text-align: center;
}
</style>
