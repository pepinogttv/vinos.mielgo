<template>
  <div class="container_listado">
    <div class="container_items" v-if="!loader">
      <Item v-for="vino in vinos" :key="vino._id" :vino="vino"></Item>
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
      loader: true,
    };
  },
  mounted() {
    fetch("https://vinos-mielgo-api.herokuapp.com/vinos")
      .then((res) => res.json())
      .then((json) => {
        this.vinos = json;
        this.loader = false;
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style>
.container_listado {
  width: 100%;
}
.container_items {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}
</style>
