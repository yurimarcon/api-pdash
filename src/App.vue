<template>
  <v-app id="inspire">
    
    <v-app-bar
    v-if="$route.path != '/'"
    :dark = $store.state.temaDark
    app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Explorer</v-toolbar-title>

      <v-spacer></v-spacer>

      <ButtonPluss/>
      <ButtonSair/>
    </v-app-bar>

    <v-navigation-drawer
      :dark = $store.state.temaDark
      v-model="drawer"
      fixed
      temporary
    >
    <div
    class="pa-5"
    >

      <v-img
        src="https://www.brasoftware.com.br/Imagens/Menu/brasoftware.png"
      >
      </v-img>
    </div>

    <v-list flat>
      <v-list-item-group
        v-model="selectedItem"
        color="black"
      >
        <v-list-item
          v-for="(workspace, i) in workspaces"
          :key="i"
          :to="workspace.to"
        >
          <v-list-item-icon>
            <v-icon v-text="workspace.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="workspace.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-navigation-drawer>

    <v-main 
    class="grey lighten-1"
    :class="{'darken-3' : $store.state.temaDark}"
    
    >
      <v-row>
        <router-view
        class="MargemDoTopo"
        />
      </v-row>
    </v-main>
  </v-app>
</template>

<script>

import ButtonSair from './components/buttonsNavRight/buttonSair.vue'
import ButtonPluss from './components/buttonsNavRight/ButtonPluss.vue'

  export default {
  components: { ButtonSair, ButtonPluss },
    data: () => ({
      drawer: null ,
      selectedItem: 1,
      workspaces: [
        { text: 'Analytics', icon: 'mdi-desktop-mac-dashboard', to: '/analytics' },
        { text: 'Explorer', icon: 'mdi-code-braces', to : '/explorer' },
      ],
      
    }),
    mounted(){
      console.log(this.$route.path);
    }
  }
</script>

<style>
.MargemDoTopo{
  margin-top: 22px;
}
.Altura{
  min-height: 90vh;
}
.Recize{
  resize: horizontal;
  overflow: auto;
}

.scroll-container{
  overflow-y: scroll;
  height:90vh;
}
::-webkit-scrollbar {
	width: 10px;
	height: 10px;
}
::-webkit-scrollbar-button:start:decrement,
::-webkit-scrollbar-button:end:increment  {
	display: none;
}
::-webkit-scrollbar-track-piece  {
	background-color: #474747;
	-webkit-border-radius: 3px;
}
::-webkit-scrollbar-thumb:vertical {
	background-color: rgb(116, 116, 116);
	-webkit-border-radius: 3px;
}
</style>