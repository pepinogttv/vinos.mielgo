<template>
  <div class="home">
    <Contact-Phone></Contact-Phone>
    <Header-Component
      text="Catálogo de vinos distribuidora Mielgo"
      paddingTop="55px"
    ></Header-Component>
    <Listado></Listado>
  </div>
</template>

<script>
import Listado from "../components/Listado.vue";
import ContactPhone from "../components/ContactPhone.vue";
import Header from "../components/Header.vue";
export default {
  name: "Home",
  components: {
    Listado,
    "Contact-Phone": ContactPhone,
    "Header-Component": Header,
  },
};
</script>
<style scoped>
.home {
  width: 80%;
  margin: auto;
}
.hr {
  height: 1px;
  background-color: #ccc;
  width: 100%;
  margin: auto;
}
@media (max-width: 1024px) {
  .home {
    width: 95%;
    margin: auto;
  }
}
</style>
