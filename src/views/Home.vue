<template>
  <div class="home">
    <contact-phone></contact-phone>
    <header>
      <h1>Catálogo de vinos distribuidora Mielgo</h1>
      <div class="hr"></div>
      <Buscador></Buscador>
      <Listado></Listado>
    </header>
  </div>
</template>

<script>
import Buscador from "../components/Buscador.vue";
import Listado from "../components/Listado.vue";
import ContactPhone from '../components/ContactPhone.vue'
export default {
  name: "Home",
  components: {
    Buscador,
    Listado,
    "contact-phone": ContactPhone,
  },
};
</script>
<style scoped>
.home {
  width: 80%;
  margin: auto;
}
header {
  padding-top: 40px;
  width: 100%;
  margin: auto;
}
h1 {
  font-family: "Antic Slab", serif;
  letter-spacing: 1px;
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
