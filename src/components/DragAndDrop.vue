<template>
  <div class="container_dragAndDrop" ref="container_dragAndDrop">
    <div
      class="dragAndDrop"
      @dragenter="handleDragEnter"
      @dragleave="handleDragLeave"
      @dragover="checkDrop"
      @drop="handleDrop"
      ref="dragAndDrop"
    >
      <input
        type="file"
        name="file-5"
        id="file-5"
        class="inputfile inputfile-5"
        :multiple="multiple"
        @change="onChangeInputFile"
      />
      <label for="file-5">
        <figure>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="iborrainputfile"
            width="20"
            height="17"
            viewBox="0 0 20 17"
          >
            <path
              d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"
            ></path>
          </svg>
        </figure>
        <span class="iborrainputfile">{{ text }}</span>
      </label>
    </div>
    <div
      class="miniatura"
      v-for="selectedFile in selectedFiles"
      :key="selectedFile.file.name"
      :id="selectedFile.file.name"
    >
      <div class="miniatura__img">
        <img :src="selectedFile.src" alt="" />
      </div>
      <div
        :class="{
          fotoPrincipal: true,
          showFotoPrincipal: selectedFiles.indexOf(selectedFile) === 0,
          dontShowFotoPrincipal: !(selectedFiles.indexOf(selectedFile) === 0),
        }"
      >
        <i class="fas fa-star"></i> Foto principal
      </div>
      <div class="miniatura__trash" @click="deleteFile(selectedFile.file.name)">
        <i class="fas fa-trash-alt"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    multiple: Boolean,
    text: String,
  },
  data() {
    return {
      selectedFiles: [],
    };
  },
  watch: {
    selectedFiles: {
      deep: true,
      handler(value) {
        if (value.length) {
          this.$emit("changeFiles", value);
        }
        const dragAndDrop = this.$refs.dragAndDrop;
        dragAndDrop.style.display = "none";
        if (value.length === 0) {
          dragAndDrop.style.display = "block";
        }
      },
    },
  },
  methods: {
    handleDragEnter(e) {
      e.preventDefault();
    },
    handleDragLeave(e) {
      e.preventDefault();
    },
    checkDrop(e) {
      e.preventDefault();
    },
    onChangeInputFile(e) {
      this.showSelectedImages(e.target.files);
    },
    handleDrop(e) {
      e.preventDefault();
      this.showSelectedImages(e.dataTransfer.files);
    },
    renameFileWithRandomNumber(file) {
      Object.defineProperty(file, "name", {
        writable: true,
        value: `${String(Math.random()).split(".")[1]}.webp`,
      });
      console.log('Name modificado: ', file.name)
    },
    showSelectedImages(files) {
      files.forEach((file) => {
        // this.renameFileWithRandomNumber(file);
        const reader = new FileReader();
        reader.onload = (() => {
          return (e) => {
            this.selectedFiles.push({
              file: file,
              src: e.target.result,
            });
          };
        })();
        reader.readAsDataURL(file);
      });
    },
    deleteFile(fileName) {
      const fileToDelete = document.getElementById(fileName);
      fileToDelete.remove();
      const finded = this.selectedFiles.find(
        (selectedFile) => selectedFile.file.name === fileName
      );
      const indexOfFinded = this.selectedFiles.indexOf(finded);
      this.selectedFiles.splice(indexOfFinded, 1);
    },
  },
};
</script>

<style>
.miniatura {
  width: 100%;
  margin-right: 3%;
  max-height: 300px;
  background-color: white;
  border: 2px solid darkslategray;
  border-radius: 8px;
  margin-bottom: 3%;
  position: relative;
  min-width: 220px;
}
.miniatura__img {
  width: 100%;
  height: 100%;
}
.miniatura__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.fotoPrincipal.showFotoPrincipal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  text-align: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: darkslategray;
  color: var(--white);
}
.fotoPrincipal.dontShowFotoPrincipal {
  display: none;
}
.miniatura__trash {
  position: absolute;
  bottom: 10px;
  right: 10px;
  height: 55px;
  width: 55px;
  border-radius: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 1px solid darkslategray;
  font-size: 1.7rem;
  color: darkslategray;
  cursor: pointer;
  transition: all 0.2s;
}
.miniatura__trash:hover {
  transform: scale(1.05);
  background-color: var(--white);
}
.miniatura__trash:active {
  transform: none;
}
.container_dragAndDrop {
  width: 100%;
  margin: auto;
  display: flex;
  flex-flow: row wrap;
}
.dragAndDrop {
  width: 100%;
  margin: auto;
  height: 180px;
  border-radius: 8px;
  background-color: white;
  border: 2px dashed darkslategray;
  overflow: hidden;
}
@media (max-width: 1024px) {
  .container_dragAndDrop {
    flex-flow: row nowrap;
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    border-radius: 5px;
  }
  .dragAndDrop,
  .miniatura {
    margin-bottom: 0;
    scroll-snap-align: center;
    position: relative;
  }
}
.dragAndDrop:hover {
  border: 2px solid green;
}
.inputfile {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}

.inputfile + label {
  width: 100%;
  height: 100%;
  font-size: 1.25rem;
  font-weight: 700;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.inputfile + label svg {
  width: 1em;
  height: 1em;
  vertical-align: middle;
  fill: currentColor;
  margin-top: -0.25em;
  margin-right: 0.25em;
}

.iborrainputfile {
  font-size: 1.05rem;
  font-weight: bold;
  letter-spacing: 1px;
}
.inputfile-5 + label {
  color: darkslategray;
}

.inputfile-5:focus + label,
.inputfile-5.has-focus + label,
.inputfile-5 + label:hover {
  color: green;
}

.inputfile-5 + label figure {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: darkslategray;
  display: block;
  padding: 20px;
  margin: 0 auto 10px;
}

.inputfile-5:focus + label figure,
.inputfile-5.has-focus + label figure,
.inputfile-5 + label:hover figure {
  background-color: green;
}

.inputfile-5 + label svg {
  width: 100%;
  height: 100%;
  fill: whitesmoke;
}
</style>
