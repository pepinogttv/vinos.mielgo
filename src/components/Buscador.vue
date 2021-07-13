<template>
  <div class="buscador_container scrollInTop" ref="buscador_container">
    <input
      class="buscador"
      type="search"
      ref="buscador_input"
      @focus="outlineParent"
      @blur="noOutlineParent"
      @change="buscarVinos"
      placeholder="NOMBRE, MARCA, O CODIGO..."
      v-model="searched"
    />
    <button class="buscar_button">Buscar</button>
  </div>
</template>

<script>
const addAndRemoveClass = (classToRemove, classToAdd, element) => {
  element.classList.remove(classToRemove);
  element.classList.add(classToAdd);
};
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
export default {
  props: {
    borrarBusqueda: Boolean,
  },
  data() {
    return {
      lastScroll: 0,
      searched: "",
    };
  },
  mounted() {
    window.addEventListener("scroll", this.fixedAndHidde());
  },
  methods: {
    fixedAndHidde() {
      const buscador_container = this.$refs.buscador_container;
      const contact_phone = document.getElementById("contact_phone");
      return () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 70) {
          if (currentScroll > this.lastScroll) {
            addAndRemoveClass(scrollUp, scrollDown, contact_phone);
            addAndRemoveClass(scrollUp, scrollDown, buscador_container);
          } else {
            addAndRemoveClass(scrollDown, scrollUp, contact_phone);
            addAndRemoveClass(scrollDown, scrollUp, buscador_container);
          }
          this.lastScroll = currentScroll;
        } else {
          addAndRemoveClass(scrollUp, "scrollInTop", buscador_container);
        }
      };
    },
    outlineParent() {
      const buscador_container = this.$refs.buscador_container;
      buscador_container.style.border = "1px solid darkslateblue";
    },
    noOutlineParent() {
      const buscador_container = this.$refs.buscador_container;
      buscador_container.style.border = "none";
    },
    buscarVinos() {
      this.$emit("startOfSearch", this.searched);
    }
  }
};
</script>

<style>
.buscador_container {
  margin-top: 10px;
  margin-bottom: 10px;
  height: 50px;
  border-radius: 3px;
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.4s;
  z-index: 1000;
}
.buscador_container.scrollInTop {
  position: relative;
}
.buscador_container.scroll-down {
  position: fixed;
  top: 50px;
  width: 90%;
  left: calc(50% - 45%);
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
    0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);
}
.buscador_container.scroll-up {
  position: fixed;
  top: 35px;
  width: 90%;
  left: calc(50% - 45%);
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
    0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);
}
@media (min-width: 1440px) {
  .buscador_container.scroll-down,
  .buscador_container.scroll-up {
    top: 50px;
    height: 55px;
    width: 90%;
    left: calc(50% - 45%);
  }
}
.buscar_button {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 80px;
  font-size: 1.1rem;
  border: none;
  cursor: pointer;
  transition: all 0.1s;
}
.buscar_button:hover {
  background-color: silver;
  color: white;
}
.buscar_button:active {
  background-color: #9c9c9c;
}
.buscador {
  width: 100%;
  height: 100%;
  font-size: 1.1rem;
  border-radius: 3px;
  border: none;
  padding: 0.5rem;
}
.buscador:focus {
  outline: none;
}
@media (max-width: 600px) {
  .buscador {
    font-size: 0.9rem;
  }
}
</style>
