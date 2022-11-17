<template>
  <section class="src-componentes-rosco">
    <h1>src-componentes-Inicio Component</h1>
    <vue-form :state="formState" @submit.prevent="enviar()">                    
      <validate tag="div">
        <label for="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          class="form-control"
          autocomplete="off"
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

      <br />

      <validate tag="div">
        <label for="edad">Edad</label>
        <input
          type="number"
          id="edad"
          class="form-control"
          autocomplete="off"
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

      <br />
      <button class="btn btn-success my-3" :disabled="formState.$invalid">Ingresar</button>
    </vue-form>
  </section>
</template>

<script >
export default {
  name: "src-componentes-rosco",
  props: [],
  mounted() {},
  data() {
    return {
      url: "http://localhost:8080/jugador",
      urlFinal: "http://localhost:8080/finalizar",
      edadMin: 6,
      edadMax: 110,
      formData: this.getInitialData(),
      formState : {},
    };
  },
  methods: {
      getInitialData() {
        return {
        nombre: null,
        edad: null        
        }
        
    },    
    enviar() {
      let jugador = { ...this.formData }
      this.nombre = jugador.nombre
      this.edad =  jugador.edad
      this.postUsuario()  
      this.formData = this.getInitialData()   
      this.formState._reset()

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
        if ( estado == 201) {        
          await this.$store.dispatch('setNombreEdad', usuario.nombre,usuario.edad);                              
          setTimeout(() => {
            this.$router.push({path:'/rosco'})
          },2000)
          
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

<style scoped lang="css">
.src-componentes-rosco {
}
</style>
