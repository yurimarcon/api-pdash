<template>
  <div>

    <v-divider></v-divider>

    <div
    class="pa-4"
    >

      <v-form
        ref="form"
        cols="12"
      >
        <v-text-field
        v-model="object.nome"
        label="Name"
        outlined
        ></v-text-field>

        <v-text-field
        v-model="object.email"
        label="E-mail"
        outlined
        ></v-text-field>

        <v-text-field
        v-model="object.telefone"
        label="Telefone"
        outlined
        ></v-text-field>

        <v-text-field
        v-model="object.empresa"
        label="Empresa"
        v-on:salvar-object="$emit"
        outlined
        ></v-text-field>

        <v-autocomplete
        id="fornecedor"
        :items="object.opcoesDeFornecedores"
        outlined
        label="Fornecedor"
        ></v-autocomplete>

        <v-textarea
        outlined
        name="input-7-4"
        label="Descrição"
        v-model="object.descricao"
        ></v-textarea>
        
        

      </v-form>
    </div>

  <v-footer
  fixed
  color="transparent"
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-col
        class="mb-10"
        cols="12"
      >
      <div
      class="d-flex justify-end"
      >
        <ButtonCancel />
        <div @click="salvar()" >
          <ButtonConclude />
        </div>
      </div>
      </v-col>
    </v-row>
  </v-footer>

  </div>

</template>

<script>
import ButtonCancel from '../../_System/_Buttons/ButtonCancel.vue'
import ButtonConclude from '../../_System/_Buttons/ButtonConclude.vue'
const axios = require('axios').default;

export default {
    components:{ButtonCancel, ButtonConclude},
    data(){
      return{
        object : {
          title: '',
          subtitle: '',
          nome:'',
          email:'',
          telefone:'',
          empresa:'',
          fornecedor:'',
          opcoesDeFornecedores:['Microsoft', 'Adobe', 'Rad Hat'],
          descricao:''
        }
      }
    },
    methods:{
      async salvar(){
        let classe = this.$store.state.exibicaoDoObjeto.class;
        // let id = this.$store.state.exibicaoDoObjeto._id;
        this.object.title = this.object.nome;
        this.object.subtitle = this.object.empresa;
        this.object.fornecedor = document.getElementById('fornecedor').value;

        console.log(this.object)

        await axios({
          method: 'put',
          url: 'http://localhost:3000/' + classe,
          data: this.object
        }).then(()=>{
          if(this.$store.state.exibicaoDoObjeto.class){
            console.log(this.$store.state.exibicaoDoObjeto.class)
            this.$store.commit('buscaObjects', this.$store.state.exibicaoDoObjeto.class)
            this.$router.push({name: this.$store.state.exibicaoDoObjeto.class})
          }else{
            this.$router.push({name: ''})
          }
        }).catch(()=>{
          console.log('Erro em chamar API de criação do objeto');
        })
      },
      cons(){
        console.log(document.getElementById('fornecedor').value);
        // console.log("this.object.fornecedor");
      }
    }
}
</script>

<style>

</style>