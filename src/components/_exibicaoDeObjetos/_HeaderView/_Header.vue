<template>
    <v-img
    height="150px"
    gradient="to top right, rgba(5,86,155,.1), rgba(25,32,50,.1)"
    >
    <ButtonMenu />
      <v-card-title class=" mt-8">
          <v-avatar 
          size="70"
          tile
          >
          <img
              alt="icon"
              :src="$store.state.exibicaoDoObjeto.icon ? $store.state.exibicaoDoObjeto.icon : $store.state.iconDefault"
          >
          </v-avatar>
          <div class="CabecalhoExibicao ml-3">
              <span class="Title">{{$store.state.exibicaoDoObjeto.title}}</span>
              <span class="Subtitle">{{$store.state.exibicaoDoObjeto.subtitle}}</span>
          </div>
          
          
      </v-card-title>
        
    </v-img>
</template>

<script>
import ButtonMenu from './ButtonMenu.vue'

export default {
  components:{ButtonMenu}  
}
</script>

<style scoped>
.CabecalhoExibicao{
    display: block;
    font-size: 1.3rem;
}
.Title{
    display: block;
}
.Subtitle{
    font-weight: 400;
    font-size: 1rem;
    color: grey;
}

</style>