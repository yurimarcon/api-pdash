<template>
  <div
  class="d-flex justify-end mr-10"
  >
    <v-fab-transition>
        <v-btn
        color="red"
        fab
        large
        dark
        bottom
        right
        class="CreateObject"
        :to='{name: $store.state.exibicaoDoObjeto.class}'
        >
            <v-icon>mdi-close</v-icon>
        </v-btn>
    </v-fab-transition>

  </div>
</template>

<script>
// const axios = require('axios').default;

export default {
  methods:{

  }
}
</script>

<style scoped>
.CreateObject{
    position: relative;
    margin-right: -10px
}
</style>