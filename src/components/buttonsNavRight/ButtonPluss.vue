<template>
    <v-menu
    left
    bottom
    :close-on-content-click="false"
    >
    <template v-slot:activator="{ on, attrs }">
        <v-btn
        icon
        v-bind="attrs"
        v-on="on"
        >
        <v-icon>mdi-plus</v-icon>
        </v-btn>
    </template>

    <v-list>
        <SearchArea
        class="pa-1"
        />
        <v-list-item
        v-for="classe in classes"
        :key="classe.nome"
        :to='{name: classe.nome}'
        link
        >
        <v-list-item-title
        link
        >
            {{classe.titulo}}
        </v-list-item-title>
        </v-list-item>
    </v-list>
    </v-menu>
</template>

<script>
import SearchArea from '../inputs/SearchArea.vue'
export default {
    components: {SearchArea},
    data(){
        return{
            classes : [
                {titulo: "Fale conosco", nome: "createleads"},
                {titulo: "Mesa", nome: "createMesa"},
            ]
        }
    },
    methods:{

    }
}
</script>

<style>

</style>