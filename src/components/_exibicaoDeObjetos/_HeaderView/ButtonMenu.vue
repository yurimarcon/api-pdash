<template>
  <div
  class="d-flex justify-end"
  >
      <v-speed-dial
      v-model="fab"
      :top="top"
      :bottom="bottom"
      :right="right"
      :left="left"
      :direction="direction"
      :open-on-hover="hover"
      :transition="transition"
      style="position: absolute"
    >
      <template v-slot:activator>
        <v-btn
          v-model="fab"
          color="blue darken-2"
          dark
          fab
        >
          <v-icon v-if="fab">
            mdi-close
          </v-icon>
          <v-icon v-else>
            mdi-dots-horizontal
          </v-icon>
        </v-btn>
      </template>
      <v-btn
        fab
        dark
        small
        color="green"
        @click="editar()"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="red"
        @click="excluir()"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="indigo"
      >
        <v-icon>mdi-history</v-icon>
      </v-btn>
    </v-speed-dial>
  </div>
</template>

<script>
const axios = require('axios').default;

export default {
  data: () => ({
    direction: 'left',
    fab: false,
    fling: false,
    hover: false,
    tabs: null,
    top: true,
    right: true,
    bottom: false,
    left: false,
    transition: 'slide-y-reverse-transition',
  }),
  methods:{
    async excluir(){
      let classe = this.$store.state.exibicaoDoObjeto.class;
      let id = this.$store.state.exibicaoDoObjeto._id;
      console.log({"_id": id})

      if(classe && id){
        await axios({
          method: 'delete',
          url: 'http://localhost:3000/' + classe,
          data: {"_id": id}
        }).then(()=>{
          if(this.$store.state.exibicaoDoObjeto.class){
            this.$router.push({name: 'null'})
            this.$store.commit('buscaObjects', this.$store.state.exibicaoDoObjeto.class)
          }else{
            this.$router.push({name: ''})
          }
        }).catch(()=>{
          console.log('Erro em chamar API de exclusão do objeto');
        })
      }else{
        console.log('Sem class ou id');
      }
    },
    async editar(){
      console.log('editando')
    }
  },
}
</script>

<style>
  /* This is for documentation purposes and will not be needed in your application */
  #create .v-speed-dial {
    position: absolute;
  }

  #create .v-btn--floating {
    position: relative;
  }
</style>