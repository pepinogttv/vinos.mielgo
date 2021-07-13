<template>
  <Scroll-Loader
    text="Cargando todos los vinos..."
    v-if="loader"
  ></Scroll-Loader>
  <div class="no_results" v-else>
    <h1><i class="fas fa-not-equal"></i> No hay coincidencias.</h1>
    <br />
    <h2 @click="mostrarTodos" class="ver_todos">Ver todos los vinos</h2>
    <p class="intenta">
      Intenta buscando por nombre, codigo o marca. Pero no todo junto.
    </p>
  </div>
</template>

<script>
import ScrollLoader from "../components/ScrollLoader.vue";
export default {
  data() {
    return {
      loader: false,
    };
  },
  components: {
    "Scroll-Loader": ScrollLoader,
  },
  methods: {
    mostrarTodos() {
      this.loader = true;
      setTimeout(() => this.$emit("mostrarTodos"), 500);
    },
  },
};
</script>

<style>
.no_results {
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  background-color: white;
  padding: 1rem;
  width: 100%;
}
.ver_todos {
  user-select: none;
  cursor: pointer;
  color: darkslateblue;
  text-decoration: underline;
}
.no_results p {
  font-size: 1rem;
}
.no_results h1 {
  margin: 0;
  padding: 0;
}
.no_results h2 {
  margin: 0;
}
</style>
