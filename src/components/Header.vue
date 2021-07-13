<template>
  <header :style="`padding-top: ${paddingTop};`">
    <div class="filter"></div>
    <h1>
      {{ text }}
    </h1>
    <p v-if="subText">{{subText}}</p>
  </header>
</template>

<script>
export default {
  props: {
    text: String,
    subText: String,
    paddingTop: String
  },
};
</script>

<style>
header {
  position: relative;
  padding-bottom: 30px;
  width: 100%;
  margin: auto;
  background-image: url("https://images.unsplash.com/photo-1572381252725-b5344abf5f83?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=969&q=80");
  background-size: cover;
  background-position: center;
  margin-bottom: 10px;
}
header p {
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
  max-width: 1024px;
  margin: auto;
  margin-bottom: 5px;
}
header h1 {
  font-family: "Antic Slab", serif;
  letter-spacing: 1px;
  color: whitesmoke;
  position: relative;
  text-align: center;
  width: 100%;
  max-width: 95%;

}
header p{
  color: whitesmoke;
  position: relative;
  font-size: 1.2rem;
}
.filter {
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
