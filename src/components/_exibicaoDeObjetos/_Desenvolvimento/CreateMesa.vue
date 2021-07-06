<template>
  <div class="scroll-container" ref="scrollContainer">
    <div class="list-container" ref="listContainer">
      <div class="list-item" v-for="(n, index) in 1000" :key="index">
        {{ n }}
      </div>
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
import ButtonCancel from '../_System/_Buttons/ButtonCancel.vue'
import ButtonConclude from '../_System/_Buttons/ButtonConclude.vue'
const axios = require('axios').default;

export default {
  components:{ButtonCancel, ButtonConclude},
  data(){
        return{
            mesa:{
                title:'Mesa de testes',
                subtitle:'Up objeto para testes',
                class:'mesa'
            }
        }
  },
  methods: {
    async salvar(){
        await axios({
          method: 'put',
          url: 'http://localhost:3000/mesa',
          data: this.mesa
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
  }
}

</script>
