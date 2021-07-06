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
        :disabled="true"
      >
        <v-text-field
        :value="$store.state.exibicaoDoObjeto.nome"
        label="Name"
        outlined
        ></v-text-field>

        <v-text-field
        :value="$store.state.exibicaoDoObjeto.email"
        label="E-mail"
        outlined
        ></v-text-field>

        <v-text-field
        :value="$store.state.exibicaoDoObjeto.telefone"
        label="Telefone"
        outlined
        ></v-text-field>

        <v-text-field
        :value="$store.state.exibicaoDoObjeto.empresa"
        label="Empresa"
        outlined
        ></v-text-field>

        <v-text-field
        :value="$store.state.exibicaoDoObjeto.fornecedor"
        outlined
        label="Fornecedor"
        ></v-text-field>

        <v-textarea
        :value="$store.state.exibicaoDoObjeto.descricao"
        outlined
        name="input-7-4"
        label="Descrição"
        ></v-textarea>

      </v-form>
    </div>
  </div>

</template>

<script>
import HeaderView from '../../_HeaderView/_Header.vue'

export default {
    components:{HeaderView},
    data: () => ({}),
}
</script>

<style>

</style>