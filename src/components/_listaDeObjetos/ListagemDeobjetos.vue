<template>
    <div class="Recize">
        <div class="scroll-container" ref="scrollContainer">
        <v-card
            :dark = $store.state.temaDark
            class="mx-auto Altura"
            width="100%"
            >
                <TopBar 
                :showIcon="false"
                :input="$store.state.objetosListados.length"
                />
                <v-container>
                    <SearchArea />

                    <v-row>
                        <v-col
                        v-for="(item, i) in $store.state.objetosListados"
                        :key="i"
                        cols="12"
                        >

                            <Card 
                            :item = item
                            />

                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </div>
    </div>
</template>


<script>
import SearchArea from '../inputs/SearchArea.vue'
import Card from './_card.vue'
import TopBar from '../_exibicaoDeObjetos/_System/_interface/_systemBar.vue'

export default {
    components:{
        SearchArea, Card, TopBar
    },
    data: () => ({

    }),
  }
</script>

<style scoped>

</style>