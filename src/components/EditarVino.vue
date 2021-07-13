<template>
  <div class="fullscreen_edit">
    <form @submit.prevent="guardarCambios" class="fullscreen_edit_form">
      <div class="equis" @click="close">
        X
      </div>
      <div class="edit_form__block">
        <label class="label">Nombre</label>
        <input
          type="text"
          placeholder="Nombre.."
          v-model="localVino.nombre"
          required
        />
      </div>
      <div class="edit_form__block">
        <label class="label">Codigo</label>
        <input
          type="text"
          placeholder="Codigo"
          v-model="localVino.codigo"
          required
        />
      </div>
      <div class="edit_form__block">
        <label class="label">Imagen</label>
        <Drag-And-Drop
          text="Arrastra o selecciona la imagen del vino"
          :multiple="false"
          @changeFiles="changeFiles"
        ></Drag-And-Drop>
      </div>
      <div class="edit_form__button_container" v-if="!loader">
        <button class="crud_buttons__editar">Guardar cambios</button>
      </div>
      <div class="edit_form__load_container" v-else>
        <img
          src="https://c.tenor.com/hQz0Kl373E8AAAAj/loading-waiting.gif"
          alt=""
        />
      </div>
    </form>
  </div>
</template>

<script>
import DragAndDrop from "../components/DragAndDrop.vue";
import { storage } from "@/firebase";
export default {
  props: {
    vino: Object,
  },
  components: {
    "Drag-And-Drop": DragAndDrop,
  },
  data() {
    return {
      localVino: JSON.parse(JSON.stringify(this.vino)),
      image: null,
      loader: false
    };
  },
  methods: {
    async guardarCambios() {
      this.loader = true;
      if (this.image) {
        const snapshot = await this.subirImagen();
        const downloadURL = await snapshot.ref.getDownloadURL();
        this.localVino["imagenes"] = [downloadURL];
        console.log(this.localVino);
      }
      fetch(`/api/put-vino?id=${this.localVino._id}`, {
        method: "POST",
        body: JSON.stringify(this.localVino),
      })
        .then(() => location.reload())
        .catch((err) => console.log(err));
    },
    close() {
      this.$emit("close");
    },
    changeFiles(files) {
      const file = files[0].file;
      this.image = file;
    },
    subirImagen() {
      const ref = storage().ref(`${this.image.name}`);
      return ref.put(this.image);
    },
  },
};
</script>

<style>
.fullscreen_edit {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(3px);
  padding-top: 20px;
}
.equis {
  height: 50px;
  width: 50px;
  display: grid;
  place-content: center;
  position: absolute;
  right: -10px;
  top: -10px;
  border-radius: 50%;
  background-color: white;
  border: 1px solid black;
  font-size: 2rem;
  cursor: pointer;
  user-select: none;
}
.fullscreen_edit_form {
  width: 95%;
  max-width: 400px;
  margin: auto;
  height: 95vh;
  max-height: 500px;
  background-color: var(--white);
  border-radius: 3px;
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
    0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);
  padding-top: 2rem;
  position: relative;
  padding-bottom: 2.5rem;
}
.edit_form__button_container {
  position: absolute;
  width: 100%;
  bottom: 10px;
  left: 0%;
}
.edit_form__block {
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: flex-start;
  margin: auto;
  margin-bottom: 10px;
}
.edit_form__block input {
  width: calc(
    100% - 0.6rem
  ); /* le restamos el padding left para que no exceda su contenedor */
  height: 35px;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding-left: 0.5rem;
}
.edit_form__block .label {
  font-size: 1.1rem;
  margin-bottom: 3px;
}
.edit_form__block .label::after {
  content: ":";
}
</style>
