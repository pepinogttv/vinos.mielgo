<template>
  <div class="container_vino_detail" v-if="vino">
    <Arrow-Back :admin="true"></Arrow-Back>
    <h1>{{ vino.nombre }}</h1>
    <div class="hr"></div>
    <div>
      <img class="img" :src="vino.imagenes[0]" alt="" />
      <h2>Codigo: {{ vino.codigo }}</h2>
      <div class="crud_buttons">
        <button class="crud_buttons__editar" @click="editar">Editar</button>
        <button class="crud_buttons__borrar" @click="borrar">Borrar</button>
        <Editor-De-Vino
          v-if="editarVino"
          @close="editar"
          :vino="vino"
        ></Editor-De-Vino>
      </div>
    </div>
  </div>
  <Scroll-Loader v-else text="Cargando vino..."></Scroll-Loader>
</template>

<script>
import Editor from "../components/EditarVino.vue";
import ScrollLoader from "../components/ScrollLoader.vue";
import ArrowBack from "../components/ArrowBack.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      vino: null,
      editarVino: false,
    };
  },
  mounted() {
    this.getVino();
    window.scroll(0,0)
  },
  methods: {
    borrar() {
      const confirmar = window.confirm(
        "Estas seguro/a que quieres borras el vino? No habra forma de recuperarlo."
      );
      if (confirmar) {
        console.log("Borrar vino");
      }
    },
    editar() {
      this.editarVino = this.editarVino ? false : true;
    },
    getVino() {
      fetch(`/api/get-vino?id=${this.id}`)
        .then((res) => res.json())
        .then((json) => (this.vino = json))
        .catch((err) => console.error(err));
    },
  },
  components: {
    "Editor-De-Vino": Editor,
    "Scroll-Loader": ScrollLoader,
    "Arrow-Back": ArrowBack,
  },
};
</script>

<style>
.container_vino_detail {
  width: 100%;
  max-width: 1000px;
  background-color: white;
  min-height: 95vh;
  margin: auto;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  padding-bottom: 0.5rem;
  padding-top: 1.5rem;
  position: relative;
}
.hr {
  max-width: 600px;
  width: 100%;
  height: 1px;
  margin: auto;
  background-color: #ccc;
  margin-bottom: 1rem;
}
.container_vino_detail .img {
  width: 100%;
  max-width: 500px;
  object-fit: cover;
  max-height: 500px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
}
.crud_buttons {
  max-width: 250px;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-around;
}
.crud_buttons button {
  padding: 0.7rem 1.5rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.2s;
}
.crud_buttons button:hover {
  transform: scale(1.03);
}
.crud_buttons button:active {
  transform: none;
}
.crud_buttons__editar {
  background-color: green;
  color: white;
}
.crud_buttons__editar:hover {
  background-color: rgb(0, 150, 0);
}
.crud_buttons__borrar {
  background-color: rgb(225, 0, 0);
  color: white;
}
.crud_buttons__borrar:hover {
  background-color: rgb(255, 0, 0);
}
</style>
