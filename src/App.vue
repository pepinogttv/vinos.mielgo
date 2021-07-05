<template>
    <div>
      <router-view />
    </div>
</template>
<script>

export default{

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Antic+Slab&display=swap');
:root{
  --verde-wsp: #26D366;
  --white: whitesmoke;
}
html{
  background-color: white;
}
body{
  margin: 0;
  min-height: 200vh;
  background-color: var(--white);
  max-width: 1440px;
  margin: auto;
  box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20);
}
a{
  color: unset;
  text-decoration: unset;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>
