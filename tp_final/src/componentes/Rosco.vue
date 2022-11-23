<template >
  <section>
    <Header />
    <div class="row d-flex justify-content-center">
      <div class="jumbotron col-md-6 justify-content-center">
        <div class="col-md-3 justify-content-center text-center">
          <div class="card-deck">
            <div class="card">
              <h1>Letra</h1>
              <div class="card-title">{{ letra }}</div>
            </div>
          </div>
        </div>
        <h1>{{ pregunta }}</h1>

        <vue-form :state="formState" @submit.prevent="postRespuesta()">
          <validate tag="div">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span
                  for="respuesta"
                  class="input-group-text"
                  id="inputGroup-sizing-lg"
                  >Respuesta</span
                >
              </div>
              <input
                type="text"
                id="respuesta"
                class="form-control"
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                autocomplete="off"
                v-model.trim="formData.respuesta"
                name="respuesta"
                required
                :minlength="respuestaMinLength"
                :maxlength="respuestaMaxLength"
                no-espacios
              />
              <button class="btn btn-info my-3" :disabled="formState.$invalid">
                Siguiente
              </button>
            </div>
            <field-messages name="respuesta" show="$dirty">
              <div slot="required" class="alert alert-danger mt-1">
                Campo requerido
              </div>
              <div slot="minlength" class="alert alert-danger mt-1">
                Este campo debe poseer al menos
                {{ respuestaMinLength }} caracteres.
              </div>
              <div slot="maxlength" class="alert alert-danger mt-1">
                Este campo no debe superar los
                {{ respuestaMaxLength }} caracteres.
              </div>
              <div slot="no-espacios" class="alert alert-danger mt-1">
                Este campo no permite espacios intermedios
              </div>
            </field-messages>
          </validate>
        </vue-form>
        <p v-if="resultado == 0"></p>
        <p v-else-if="resultado == 1" class="alert alert-danger">INCORRECTO!</p>
        <p v-else-if="resultado == 2" class="alert alert-success">CORRECTO!</p>
      </div>
    </div>
  </section>
</template>

<script>
import Header from './Header.vue'
export default {
  name: "src-componentes-rosco",
  components: {
    Header,    
  },  
  props: [],
  mounted() {
    this.getPregunta();
  },
  data() {
    return {
      urlPregunta: "http://localhost:8080/pregunta",
      urlRespuesta: "http://localhost:8080/evaluacion",
      urlPuntaje: "http://localhost:8080/puntaje",
      letra: "",
      pregunta: "",
      respuesta: "",
      respuestaMinLength: 2,
      respuestaMaxLength: 25,
      formState: {},
      formData: this.getInitialData(),
      resultado: 0,
    };
  },
  methods: {
    getInitialData() {
      return {
        respuesta: null,
      };
    },

    async postRespuesta() {
      let res = { ...this.formData };
      this.respuesta = res.respuesta;
      let respuestaJson = {
        respuesta: this.respuesta,
      };
      try {
        let { data, status: estado } = await this.axios.post(
          this.urlRespuesta,
          respuestaJson
        );
        if (estado == 200) {
          if (data.mensaje == "incorrecto!!") {
            this.resultado = 1;
          } else {
            this.resultado = 2;
          }
          setTimeout(() => {
            this.getPregunta();
            this.getPuntaje(this.urlPuntaje);
            this.resultado = 0;
          }, 1000);
        }
      } catch (error) {
        console.log(error.response.status);
        console.log(error.response.data);
        console.error("Error en postUsuario", error.message);
      }
    },

    async getPregunta() {
      try {
        let { data: preguntas } = await this.axios.get(this.urlPregunta);
        //console.log(preguntas);
        this.letra = preguntas.letra;
        this.pregunta = preguntas.pregunta;
      } catch (error) {
        this.goFinal();
      }
    },
  },
  computed: {},
};
</script>

<style scoped lang="css">
.card-title {
  font-size: 135px;
  text-align: center;
}
</style>

