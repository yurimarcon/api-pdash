<template>
    <v-row >
        <v-col 
        cols="12"
        >
          <v-text-field
            outlined
            label="Pesquisar"
            prepend-inner-icon="mdi-magnify"
          ></v-text-field>
        </v-col>
    </v-row>
</template>

<script>
  export default {
    data: () => ({
      message: 'Hey!',
      loading: false,
    }),

    methods: {
      clickMe () {
        this.loading = true
        this.message = 'Wait for it...'
        setTimeout(() => {
          this.loading = false
          this.message = `You've clicked me!`
        }, 2000)
      },
    },
  }
</script>

<style>

</style>