<template>
  <div class="container_listado">
    <Buscador @startOfSearch="startOfSearch"></Buscador>
    <div class="container_items" v-if="vinos">
      <Item
        v-for="vino in vinosWithoutCodeNull"
        :key="vino._id"
        :vino="vino"
      ></Item>
      <Scroll-Loader
        v-if="vinos.length && hayMasVinos"
        text="Cargando mas vinos..."
      ></Scroll-Loader>
      <No-Results
        v-else-if="!vinos.length"
        @mostrarTodos="mostrarTodos"
      ></No-Results>
    </div>
    <Scroll-Loader text="Cargando..." v-else></Scroll-Loader>
  </div>
</template>

<script>
import Item from "./Item.vue";
import ScrollLoader from "../components/ScrollLoader.vue";
import NoResults from "../components/NoResults.vue";
import Buscador from "../components/Buscador.vue";
import { mapActions, mapState } from "vuex";
export default {
  components: {
    Item,
    "Scroll-Loader": ScrollLoader,
    "No-Results": NoResults,
    Buscador,
  },
  data() {
    return {
      vinos: null,
      hayMasVinos: true,
    };
  },
  computed: {
    ...mapState("home", ["vinos_state", "resultOfSearch"]),
    _idOfVinosCargados: function() {
      return this.vinos.map((x) => x._id);
    },
    vinosWithoutCodeNull: function() {
      return this.vinos.filter((x) => !(x.codigo === "null"));
    },
  },
  mounted() {
    this.areThereVinosInTheState()
  },
  methods: {
    ...mapActions("home", ["actionSetVinos", "actionSetResultOfSearch"]),
    areThereVinosInTheState() {
      if (this.vinos_state) {
        this.vinos = this.vinos_state;
        this.addScrollLoadingEvent();
      } else {
        this.firstForty();
      }
    },
    firstForty() {
      fetch("/api/primeros-cuarenta", { method: "POST" })
        .then((res) => res.json())
        .then((json) => {
          this.vinos = json;
          this.actionSetVinos(json);
          this.addScrollLoadingEvent();
        })
        .catch((err) => console.log(err));
    },
    scrollLoading() {
      fetch("/api/primeros-cuarenta", {
        method: "POST",
        body: JSON.stringify(this._idOfVinosCargados),
      })
        .then((res) => res.json())
        .then((json) => {
          if (json.length) {
            this.vinos = this.vinos.concat(json);
            this.actionSetVinos(this.vinos);
            this.addScrollLoadingEvent();
          } else {
            this.hayMasVinos = false;
          }
        })
        .catch((err) => console.error(err));
    },
    activeScrollLoading() {
      const allItems = document.querySelectorAll(".item_listado");
      const lasItem = allItems[allItems.length - 1];
      if (!lasItem) return;
      const currentScroll = window.pageYOffset + window.innerHeight + 200;
      if (currentScroll >= lasItem.offsetTop) {
        this.hayMasVinos = true;
        this.scrollLoading();
        this.removeScrollLoadingEvent();
      }
    },
    addScrollLoadingEvent() {
      window.addEventListener("scroll", this.activeScrollLoading);
    },
    removeScrollLoadingEvent() {
      window.removeEventListener("scroll", this.activeScrollLoading);
    },
    mostrarTodos() {
      this.areThereVinosInTheState()
      document.querySelector(".buscador").value = "";
    },
    startOfSearch(searched) {
      this.vinos = null;
      this.actionSetResultOfSearch(searched);
      this.hayMasVinos = false;
    },
  },
  watch: {
    resultOfSearch(resultado) {
      if (resultado) {
        this.vinos = resultado;
      }
    },
  },
  unmounted() {
    this.removeScrollLoadingEvent();
  },
};
</script>

<style>
.container_listado {
  width: 100%;
  padding-bottom: 10rem;
}
.container_items {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}
</style>
