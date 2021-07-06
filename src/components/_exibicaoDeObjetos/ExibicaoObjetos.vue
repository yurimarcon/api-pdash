<template>
    <div class="scroll-container" ref="scrollContainer">
        <v-card 
        :dark = $store.state.temaDark
        class="Altura"
        width="100%"
        >
            <TopBar 
            :showIcon="true"
            :input="$store.state.exibicaoDoObjeto.class"
            />
            <router-view
            id="View"
            ></router-view>
        </v-card>
    </div>
</template>

<script>
import TopBar from './_System/_interface/_systemBar.vue'

export default {
    components:{TopBar},
    data: () => ({}),
}
</script>