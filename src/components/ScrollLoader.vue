<template>
  <div class="scroll_loader">
    <h1>{{text}}</h1>
    <img
      src="https://c.tenor.com/hQz0Kl373E8AAAAj/loading-waiting.gif"
      alt=""
    />
  </div>
</template>

<script>
export default {
  props:{
    text: String
  }
};
</script>

<style>
.scroll_loader {
  width: 100%;
}
.scroll_loader h1 {
  width: 100%;
  text-align: center;
}
.scroll_loader img {
  width: 70px;
  height: 70px;
}
</style>
