<template>
  <div 
  style="width:100%"
  :dark = $store.state.temaDark
  class="d-flex"
  >
    <ListaDeClasses
    style="width:15%"
    class="ml-5"
    />
    <ListagemDeObjetos
    style="width:20%"
    class="ml-1"
    />
    <ExibicaoObjetos
    style="width:65%"
    class="ml-1"
    />
  </div>
</template>

<script>
import ListaDeClasses from '../components/_listagemDeClasses/ListaDeClasses.vue'
import ListagemDeObjetos from '../components/_listaDeObjetos/ListagemDeobjetos.vue'
import ExibicaoObjetos from '../components/_exibicaoDeObjetos/ExibicaoObjetos.vue'
  export default {
    name: 'Home',

    components: {
      ListaDeClasses, ListagemDeObjetos, ExibicaoObjetos
    },
  }
</script>

<style scoped>

</style>