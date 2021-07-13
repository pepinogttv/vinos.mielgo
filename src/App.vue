<template>
  <div>
    <router-view />
    <scroll-to-top></scroll-to-top>
  </div>
</template>
<script>
import ScrollToTop from "./components/ScrollToTop.vue";
export default {
  components: {
    "scroll-to-top": ScrollToTop,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Antic+Slab&display=swap");
:root {
  --verde-wsp: #26d366;
  --white: whitesmoke;
}
html {
  background-color: var(--white);
}
body {
  margin: 0;
  min-height: 100vh;
  background-color: var(--white);
  /* font-family: "Antic Slab", serif; */
}
a {
  color: unset;
  text-decoration: unset;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.no_select_highlighting {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
</style>
