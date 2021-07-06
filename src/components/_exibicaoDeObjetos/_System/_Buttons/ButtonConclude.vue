<template>
  <div
  class="d-flex justify-end mr-10"
  >
    <v-fab-transition>
      <v-btn
        color="green"
        fab
        large
        dark
        bottom
        right
        class="CreateObject"
      >
        <v-icon>mdi-check</v-icon>
      </v-btn>
    </v-fab-transition>

  </div>
</template>

<script>


export default {
  methods:{
  }
}
</script>

<style scoped>
.CreateObject{
    position: relative;
    margin-right: 10px
}
</style>