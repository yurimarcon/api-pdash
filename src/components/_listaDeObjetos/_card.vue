<template>
    <div>
        <v-card
        @click="$store.dispatch('exibicaoDoObjeto', item)"
        :to="{name: item.class}"
        :color="item.color"
        link
        outlined
        elevation="2"
        >
            <div class="d-flex">
                <v-avatar
                    class="ma-2"
                    size="60"
                    tile
                >
                    <v-img :src="item.icon ? item.icon : $store.state.iconDefault"></v-img>
                </v-avatar>
                <div>
                    <v-card-title
                    v-text="item.title"
                    ></v-card-title>

                    <v-card-subtitle
                    v-text="item.subtitle"
                    ></v-card-subtitle>
                    
                </div>
            </div>
        </v-card>
    </div>
</template>

<script>
export default {
    props:['item']
}
</script>

<style>

</style>