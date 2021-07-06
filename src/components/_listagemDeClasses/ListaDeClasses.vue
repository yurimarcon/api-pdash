<template>
  <div class="scroll-container" ref="scrollContainer">
    <v-card
    :dark = $store.state.temaDark
    class="mx-auto Altura"
    width="100%"
    >
        <v-list>
            <v-list-group
                v-for="item in items"
                :key="item.title"
                small
                no-action
                color="normal"
            >
                <template v-slot:activator>
                <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
                </template>

                <v-list-item
                v-for="child in item.items"
                :key="child.title"
                link
                @click="$store.commit('buscaObjects', child.classe)"
                >
                <v-list-item-content>
                    <v-list-item-title
                    v-text="child.title"
                    class="ml-0"
                    
                    ></v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list-group>
        </v-list>
    </v-card>
  </div>
  
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          title: 'Analytics',
          items: [
            {title: 'Analytics', classe: 'analytics'},
          ],
        },
        {
          title: 'Marketing',
          items: [
            {title: 'Fale conosco', classe: 'leads'},
            {title: 'Eventos', classe: 'eventos'},
            ],
        },
        {
          title: 'Desenvolvimento',
          items: [
            {title: 'mesa', classe: 'mesa'},
            ],
        },
      ],
    }),
  }
</script>

<style scoped>
*{
    font-size: 1rem;
}

</style>