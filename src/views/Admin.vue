<template>
  <div class="admin">
    <Contact-Phone></Contact-Phone>
    <Header-Component
      text="Administrador de vinos distribuidora Mielgo"
      subText="Presiona el vino para editar o borrar"
      paddingTop="55px"
    ></Header-Component>
    <Buscador @startOfSearch="startOfSearch"></Buscador>
    <div class="all_vinos" v-if="vinos">
      <router-link
        v-for="vino in vinos"
        :key="vino._id"
        :to="`/admin/${vino._id}`"
      >
        <div class="one_vino">
          <div class="one_vino__image">
            <img :src="vino.imagenes[0]" alt="" />
          </div>
          <div class="one_vino__info no_select_highlighting">
            <h2>{{ vino.nombre }}</h2>
            <h2>{{ vino.codigo }}</h2>
          </div>
        </div>
      </router-link>
      <No-Results
        v-if="!vinos.length"
        @mostrarTodos="mostrarTodos"
      ></No-Results>
    </div>
    <Scroll-Loader text="Cargando..." v-else></Scroll-Loader>
  </div>
</template>
<script>
import ScrollLoader from "../components/ScrollLoader.vue";
import Header from "../components/Header.vue";
import Buscador from "../components/Buscador.vue";
import ContactPhone from "../components/ContactPhone.vue";
import NoResults from "../components/NoResults.vue";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      vinos: null,
      borrarBusqueda: false,
    };
  },
  computed: {
    ...mapState("admin", ["vinos_admin", "resultOfSearch"]),
  },
  components: {
    "Scroll-Loader": ScrollLoader,
    "Header-Component": Header,
    Buscador,
    "Contact-Phone": ContactPhone,
    "No-Results": NoResults,
  },
  mounted() {
    this.areThereVinosInTheState();
  },
  methods: {
    ...mapActions("admin", ["actionSetVinosAdmin", "actionSetResultOfSearch"]),
    areThereVinosInTheState() {
      if (this.vinos_admin) {
        this.vinos = JSON.parse(JSON.stringify(this.vinos_admin));
      } else {
        this.getAllVinos();
      }
    },
    async getAllVinos() {
      const res = await fetch("/api/index");
      this.vinos = await res.json();
      this.actionSetVinosAdmin(this.vinos);
    },
    startOfSearch(searched) {
      this.vinos = null;
      this.actionSetResultOfSearch(searched);
    },
    mostrarTodos() {
      this.areThereVinosInTheState();
      document.querySelector(".buscador").value = "";
    },
  },
  watch: {
    resultOfSearch(resultado) {
      if (resultado) this.vinos = resultado;
    },
  },
};
</script>
<style>
.admin {
  position: relative;
  width: 80%;
  margin: auto;
}
@media (max-width: 1024px) {
  .admin {
    width: 95%;
    margin: auto;
  }
}
.admin h1 {
  margin-top: 1rem;
}
.all_vinos {
  width: 100%;
  margin: auto;
}
.one_vino {
  cursor: pointer;
  width: 100%;
  height: 60px;
  border-radius: 3px;
  overflow: hidden;
  background-color: white;
  display: flex;
  margin-bottom: 10px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
}
.one_vino.selected {
  transform: scale(1.05);
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
    0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);
}
.one_vino__image {
  width: 10%;
  min-width: 60px;
}
.one_vino__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  border: 1px solid whitesmoke;
}
.one_vino__info {
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 0.5rem;
  font-family: "Antic Slab", serif;
}
.one_vino__info h2 {
  margin: 0;
  min-width: 50px;
  text-align: right;
  font-size: 1.2rem;
}
.one_vino__info h2:first-child {
  text-align: left;
}
@media (max-width: 1024px) {
  .one_vino__info h2 {
    font-size: 0.88em;
  }
}
</style>
