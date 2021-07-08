<template>
  <div class="Recize">
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
          title: 'CRM',
          items: [
            {title: '*Pessoas', classe: ''},
            {title: '*Empresas', classe: ''},
            {title: '*Novas oportunidades', classe: ''},
            {title: '*Pipeline', classe: ''},
          ],
        },
        {
          title: 'CSC',
          items: [
            {title: '*Agendamentos', classe: ''},
            {title: '*Cobranças', classe: ''},
          ],
        },
        {
          title: 'Desenvolvimento',
          items: [
            {title: 'mesa', classe: 'mesa'},
            ],
        },
        {
          title: 'ECM',
          items: [
            {title: '*Arquivos', classe: ''},
            {title: '*GED', classe: ''},
          ],
        },
        {
          title: 'Financeiro',
          items: [
            {title: '*Contas a Pagar', classe: ''},
            {title: '*Contas a receber', classe: ''},
            {title: '*Duplicatas', classe: ''},
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
          title: 'Sistema',
          items: [
            {title: '*Classes', classe: ''},
            {title: '*Grupos de usuários', classe: ''},
            {title: '*Usuários', classe: ''},
            {title: '*Workspaces', classe: ''},
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