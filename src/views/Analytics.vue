<template>
  <div 
  style="width:100%"
  :dark = $store.state.temaDark
  class="d-flex"
  >
    <ListagemDeObjetos
    style="width:20%"
    class="ml-1"
    />
    <ExibicaoObjetos
    style="width:80%"
    class="ml-1"
    />
  </div>
</template>

<script>
import ListagemDeObjetos from '../components/_listaDeObjetos/ListagemDeobjetos.vue'
import ExibicaoObjetos from '../components/_exibicaoDeObjetos/ExibicaoObjetos.vue'
  export default {
    name: 'Home',
    components: {
      ListagemDeObjetos, ExibicaoObjetos
    },
    mounted(){
      this.$store.commit('buscaObjects', 'analytics')
    }
  }
</script>

<style scoped>

</style>