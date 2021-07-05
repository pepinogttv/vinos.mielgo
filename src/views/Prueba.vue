<template>
    <div class="prueba" v-if=" vinos">
        <div>
            {{vinos}}
        </div>
    </div>
    <div v-else>
        <h1>Cargando...</h1>
    </div>
</template>

<script>
export default {
    data(){
        return{
            vinos: null
        }
    },
    mounted(){
    fetch("/api/index.js")
      .then((res) => res.json())
      .then((json) => {
        this.vinos = json;
        this.loader = false;
      })
      .catch((err) => console.error(err));
    }
}
</script>

<style>

</style>