<template>
  <v-row justify="center">

    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          Deseja deletar?
        </v-card-title>

        <v-card-text>
          A exclusão desse registro é permanente e sem possibilidade de sestauração.
        </v-card-text>

        <v-card-actions>

          <v-btn
            color="green darken-1"
            text
            @click="$emit('dialogFalse')"
          >
            Não deletar
          </v-btn>

          <v-spacer></v-spacer>
          <v-btn
            color="red"
            text
            @click="excluir()"
          >
            Deletar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
const axios = require('axios').default;

export default {
    props:['dialog'],
    methods:{
        async excluir(){
            let classe = this.$store.state.exibicaoDoObjeto.class;
            let id = this.$store.state.exibicaoDoObjeto._id;
            console.log({"_id": id})

            if(classe && id){
                await axios({
                method: 'delete',
                url: process.env.VUE_APP_URL_BASE_BACKEND + classe,
                data: {"_id": id}
                }).then(()=>{
                if(this.$store.state.exibicaoDoObjeto.class){
                    this.$store.commit('buscaObjects', this.$store.state.exibicaoDoObjeto.class)
                    this.$emit('dialogFalse')
                    this.$router.push({name: 'null'})
                }else{
                    this.$router.push({name: ''})
                }
                }).catch(()=>{
                console.log('Erro em chamar API de exclusão do objeto');
                })
            }else{
                console.log('Sem class ou id');
            }
            this.$emit('dialogFalse')
        }
    }
}
</script>

<style>

</style>