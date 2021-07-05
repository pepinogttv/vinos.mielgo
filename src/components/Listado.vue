<template>
  <div class="container_listado">
    <div class="container_items" v-if="vinos">
      <Item v-for="vino in vinos" :key="vino._id" :vino="vino"></Item>
      <div class="scroll_loader">
        <h1>Cargando mas vinos...</h1>
      </div>
    </div>
    <div class="container_loader" v-else>
      <h1>Cargando...</h1>
    </div>
  </div>
</template>

<script>
import Item from "./Item.vue";
export default {
  components: {
    Item,
  },
  data() {
    return {
      vinos: null,
    };
  },
  mounted() {
    this.firstForty();
  },
  methods: {
    firstForty() {
      fetch("/api/primeros-cuarenta", { method: "POST" })
        .then((res) => res.json())
        .then((json) => {
          this.vinos = json;
          this.addScrollLoadingEvent();
        })
        .catch((err) => console.log(err));
    },
    scrollLoading() {
      this.loader = true;
      fetch("/api/primeros-cuarenta", {
        method: "POST",
        body: JSON.stringify(this._idOfVinosCargados),
      })
        .then((res) => res.json())
        .then((json) => {
          this.vinos = this.vinos.concat(json);
          this.addScrollLoadingEvent();
        })
        .catch((err) => console.error(err));
    },
    activeScrollLoading() {
      const allItems = document.querySelectorAll(".item_listado");
      const lasItem = allItems[allItems.length - 1];
      const currentScroll = window.pageYOffset + window.innerHeight + 200;
      if (currentScroll >= lasItem.offsetTop) {
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
  },
  computed: {
    _idOfVinosCargados: function() {
      return this.vinos.map((x) => x._id);
    },
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
  justify-content: space-around;
}
</style>
