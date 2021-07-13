<template>
  <div class="container_vino_detail">
    <Arrow-Back></Arrow-Back>
    <Contact-Phone></Contact-Phone>
    <Scroll-Loader v-if="!vino" text="Cargando vino..."></Scroll-Loader>
    <div v-else>
      <Header-Component
        :text="vino.nombre"
        paddingTop="30px"
      ></Header-Component>
      <img :src="vino.imagenes[0]" alt="" class="img" />
      <h2>Codigo: {{ vino.codigo }}</h2>
    </div>
  </div>
</template>
<script>
import ContactPhone from "../components/ContactPhone.vue";
import ArrowBack from "../components/ArrowBack.vue";
import ScrollLoader from "../components/ScrollLoader.vue";
import Header from "../components/Header.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      vino: null,
    };
  },
  mounted() {
    this.getVino();
    window.scroll(0, 0);
  },
  methods: {
    getVino() {
      fetch(`/api/get-vino?id=${this.id}`)
        .then((res) => res.json())
        .then((json) => (this.vino = json))
        .catch((err) => console.error(err));
    },
  },
  components: {
    "Contact-Phone": ContactPhone,
    "Arrow-Back": ArrowBack,
    "Scroll-Loader": ScrollLoader,
    "Header-Component": Header,
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
.container_vino_detail .img {
  margin-top: 10px;
  width: 100%;
  max-width: 500px;
  object-fit: contain;
  max-height: 500px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
}
</style>
