import Vue from 'vue'
import Vuex from 'vuex'
const axios = require('axios').default;

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    temaDark : false,
    iconDefault: 'https://image.flaticon.com/icons/png/512/2289/2289372.png',
    pacotes:[],
    classes:[],
    objetosListados: [],
    exibicaoDoObjeto:{}
  },
  mutations: {
    alteraTema(state){
      state.temaDark = !this.state.temaDark
    },
    exibicaoDoObjeto(state,item){
      state.exibicaoDoObjeto = state.objetosListados.filter(obj => obj._id == item._id)[0]
      // console.log(state.exibicaoDoObjeto)
    },
    buscaObjects(state, classe){
      axios.get('http://localhost:3000/'+classe)
        .then((response)=>{
          state.objetosListados = response.data
          console.log(response.data);
        })
    }
  },
  actions: {
    exibicaoDoObjeto({commit},id){
      commit('exibicaoDoObjeto', id)
    },
  },
  modules: {
  }
})
