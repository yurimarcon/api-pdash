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
      >
        <v-text-field
        :value="$store.state.exibicaoDoObjeto.live"    
        label="Live"
        outlined
        ></v-text-field>

        <v-text-field
        v-model="$store.state.exibicaoDoObjeto.palestrante"
        label="Palestrante"
        outlined
        ></v-text-field>

        <v-text-field
        v-model="$store.state.exibicaoDoObjeto.descricao"
        label="Descrição"
        outlined
        ></v-text-field>

        <v-text-field
        v-model="$store.state.exibicaoDoObjeto.empresa"
        :counter="10"
        label="Empresa"
        outlined
        ></v-text-field>

        <v-date-picker 
        v-model="picker"
        ></v-date-picker>

        
      </v-form>
    </div>
  </div>
</template>

<script>
import HeaderView from '../../_HeaderView/_Header.vue'

export default {
    components:{HeaderView},
    data () {
      return {
        picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      }
    },
  }
</script>

<style>

</style>