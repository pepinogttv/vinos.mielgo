<template>
  <router-link :to="admin ? '/admin' : '/'">
    <div class="container_arrow_back">
      <i class="fas fa-long-arrow-alt-left"></i>
    </div>
  </router-link>
</template>

<script>
export default {
  props:{
    admin: Boolean
  }
};
</script>

<style>
.container_arrow_back {
  position: fixed;
  bottom: 10px;
  left: 10px;
  z-index: 1001;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: darkslateblue;
  border-radius: 8px;
box-shadow: 0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.20);
  cursor: pointer;
  user-select: none;
}
.container_arrow_back i {
  font-size: 2rem;
  color: white;
}
</style>
