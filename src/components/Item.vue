<template>
  <router-link
    :to="`/vinos/${vino._id}`"
    class="router_link_to_item_detail"
  >
    <div class="item_listado">
      <div class="item_listado__imagen">
        <img
          :src="vino.imagenes[0]"
          alt=""
        />
      </div>
      <div class="item_listado__info">
        <h5>{{ vino.nombre }}</h5>
        <h5>{{ vino.codigo }}</h5>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    vino: Object,
  },
};
</script>

<style>
.router_link_to_item_detail {
  width: 49.5%;
  margin-bottom: 10px;
}
.item_listado {
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-between;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  background-color: white;
  cursor: pointer;
  transition: all 0.2s;
}
.item_listado:hover {
  transform: translate(-2px, -2px);
  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
    0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
}
.item_listado__imagen {
  width: 15%;
  height: 100%;
}
.item_listado__imagen img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  border: 1px solid whitesmoke;
}
.item_listado__info {
  width: 85%;
  padding-inline: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Antic Slab", serif;
}
.item_listado__info h5 {
  font-size: 1.1rem;
}
.item_listado__info h5:first-child {
  text-align: start;
  font-size: 1rem;
  margin: 0;
}
@media (max-width: 1024px) {
  .router_link_to_item_detail {
    width: 99%;
    height: 60px;
  }
  .item_listado__info h5 {
    font-size: 1.1rem;
  }
  .item_listado__info h5:first-child {
    text-align: start;
    font-size: 0.9rem;
    max-width: 88%;
    margin: 0;
  }
}
</style>
