<template>
  <section class="fondo" >
    <div class="background">
      <div class="shape"></div>
      <div class="shape"></div>
    </div>
    <vue-form class="form-login" :state="formState" @submit.prevent="enviar()">
      <h3>Pasapalabra</h3>
      <validate tag="div">
        <label for="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          class="form-control"
          autocomplete="off"
          placeholder="Ingresa tu nombre"
          v-model.trim="formData.nombre"
          name="nombre"
          required
        />
        <!-- mensajes de validación -->
        <field-messages name="nombre" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">
            Campo requerido
          </div>
        </field-messages>
      </validate>
      <validate tag="div">
        <label for="edad">Edad</label>
        <input
          type="number"
          id="edad"
          class="form-control"
          autocomplete="off"
          placeholder="Ingresa tu edad"
          v-model.number="formData.edad"
          name="edad"
          required
          :min="edadMin"
          :max="edadMax"
        />
        <!-- mensajes de validación -->
        <field-messages name="edad" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">
            Campo requerido
          </div>
          <div slot="min" class="alert alert-danger mt-1">
            La edad mínima debe ser {{ edadMin }} años.
          </div>
          <div slot="max" class="alert alert-danger mt-1">
            La edad máxima debe ser {{ edadMax }} años.
          </div>
        </field-messages>
      </validate>

      <button :disabled="formState.$invalid">Ingresar</button>
    </vue-form>
  </section>
</template>

<script >
export default {
  name: "src-componentes-rosco",

  props: [],
  mounted() {},
  created() {document.body.style.backgroundColor = ' #080710 '},
  data() {
    return {
      url: "http://localhost:8080/jugador",
      urlFinal: "http://localhost:8080/finalizar",
      edadMin: 6,
      edadMax: 110,
      formData: this.getInitialData(),
      formState: {},
    };
  },
  methods: {
    getInitialData() {
      return {
        nombre: null,
        edad: null,
      };
    },
    enviar() {
      let jugador = { ...this.formData };
      this.nombre = jugador.nombre;
      this.edad = jugador.edad;
      this.getFinalizar(this.urlFinal);
      this.postUsuario();
      this.formData = this.getInitialData();
      this.formState._reset();
    },



    async postUsuario() {
      let usuarioNew = {
        nombre: this.nombre,
        edad: this.edad,
      };
      try {
        let { data: usuario, status: estado } = await this.axios.post(
          this.url,
          usuarioNew
        );
        console.log(estado);
        if (estado == 201) {
          await this.$store.dispatch(
            "setNombreEdad",
            usuario.nombre,
            usuario.edad
          );
          this.goPantalla()
        }
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

<style scoped lang="css" src="../assets/css/login.css">
html body{
    background: #080710 !important;
}

</style>


