<template>
  <div class="scroll_to_top" @click="scrollToTop">
    <i class="fas fa-chevron-up"></i>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style>
.scroll_to_top {
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 10px;
  right: 10px;
  background-color: darkslateblue;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font-size: 1.8rem;
  color: white;
  cursor: pointer;
 box-shadow: 0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.20);
}
</style>
