<template>
  <div>
    <HeaderView 
    v-if="true"
    />
    <v-divider></v-divider>

    <div
    class="pa-4"
    >

      <v-form
        ref="form"
        :disabled="!$store.state.modoEdicao"
      >
        <v-text-field
        id="nome"
        :value="$store.state.exibicaoDoObjeto.nome"
        label="Name"
        outlined
        ></v-text-field>

        <v-text-field
        id="email"
        :value="$store.state.exibicaoDoObjeto.email"
        label="E-mail"
        outlined
        ></v-text-field>

        <v-text-field
        id="telefone"
        :value="$store.state.exibicaoDoObjeto.telefone"
        label="Telefone"
        outlined
        ></v-text-field>

        <v-text-field
        id="empresa"
        :value="$store.state.exibicaoDoObjeto.empresa"
        label="Empresa"
        outlined
        ></v-text-field>

        <v-text-field
        id="fornecedor"
        :value="$store.state.exibicaoDoObjeto.fornecedor"
        outlined
        label="Fornecedor"
        ></v-text-field>

        <v-textarea
        id="descricao"
        :value="$store.state.exibicaoDoObjeto.descricao"
        outlined
        name="input-7-4"
        label="Descrição"
        ></v-textarea>

      </v-form>
    </div>
    <v-footer
    v-if="$store.state.modoEdicao"
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
          <div
          @click="cancelarEdicao()"
          >
            <ButtonCancel />
          </div>
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
import HeaderView from '../../_HeaderView/_Header.vue'
import ButtonCancel from '../../_System/_Buttons/ButtonCancel.vue'
import ButtonConclude from '../../_System/_Buttons/ButtonConclude.vue'

const axios = require('axios').default;

export default {
  components:{HeaderView, ButtonCancel, ButtonConclude},
  data: () => ({}),
  methods:{
    async salvar(){
      let object = {
        _id       : this.$store.state.exibicaoDoObjeto._id,
        title     : this.$store.state.exibicaoDoObjeto.title,
        subtitle  : this.$store.state.exibicaoDoObjeto.subtitle,
        nome      : document.getElementById('nome').value,
        email     : document.getElementById('email').value,
        telefone  : document.getElementById('telefone').value,
        empresa   : document.getElementById('empresa').value,
        fornecedor: document.getElementById('fornecedor').value,
        descricao : document.getElementById('descricao').value,
        class     : this.$store.state.exibicaoDoObjeto.class
      }
      
      await axios({
        method: 'post',
        url: process.env.VUE_APP_URL_BASE_BACKEND + 'leads',
        data: object
      }).then(()=>{
        if(this.$store.state.exibicaoDoObjeto.class){
          this.$store.commit('buscaObjects', this.$store.state.exibicaoDoObjeto.class)
        }else{
          this.$router.push({name: 'null'})
        }
      }).catch(()=>{
        console.log('Erro em chamar API de criação do objeto');
        this.$router.push({name: 'null'})
      })
      this.$store.commit('alternaModoEdicao')
    },
    cancelarEdicao(){
      this.$store.commit('alternaModoEdicao')
      this.$router.push({name: 'null'})
    }
  }
    
}
</script>

<style>

</style>