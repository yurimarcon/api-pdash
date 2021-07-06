<template>
  <div>
      <v-system-bar
        lights-out
      >
        <v-icon
        v-if="showIcon"
        link
        @click="$router.go(-1)"
        >mdi-step-backward</v-icon>
        
        <span class="font-weight-black"> {{input ? input : ''}} </span>
        
        <v-spacer></v-spacer>

        <v-icon
        link
        @click="reload()"
        >mdi-reload</v-icon>
        <!-- <v-icon>mdi-signal-cellular-outline</v-icon> -->
      </v-system-bar>
  </div>
</template>

<script>
export default {
    props:['showIcon', 'input'],
    methods:{
        reload(){
          if(this.$store.state.exibicaoDoObjeto.class){
            this.$store.commit('buscaObjects', this.$store.state.exibicaoDoObjeto.class)
          }
        }
    }
}
</script>

<style>

</style>