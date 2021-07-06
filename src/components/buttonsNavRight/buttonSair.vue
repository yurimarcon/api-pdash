<template>
  <div class="text-center">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-x
    >
      <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
      </template>

      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
              >
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Yuri Marcon</v-list-item-title>
              <v-list-item-subtitle>Cópia do SYDLE</v-list-item-subtitle>
            </v-list-item-content>

          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <!-- <v-list-item>
            <v-list-item-action>
              <v-switch
                v-model="message"
                color="purple"
              ></v-switch>
            </v-list-item-action>
            <v-list-item-title>Enable messages</v-list-item-title>
          </v-list-item> -->

          <v-list-item>
            <v-list-item-action>
              <v-switch
                v-model="dark"
                @click="$store.commit('alteraTema')"
                color="purple"
              ></v-switch>
            </v-list-item-action>
            <v-list-item-title>Tema dark</v-list-item-title>
          </v-list-item>
        </v-list>

        <v-card-actions>
          <v-spacer></v-spacer>

          <!-- <v-btn
            text
            @click="menu = false"
          >
            Cancel
          </v-btn> -->
          <v-btn
            color="primary"
            text
            to="/"
            @click="menu = false"
          >
            Sair
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
  export default {
    data: () => ({
      fav: true,
      menu: false,
      message: false,
      dark: false,
    }),
    mounted(){
      this.dark = this.$store.state.temaDark
    }
  }
</script>

<style>

</style>