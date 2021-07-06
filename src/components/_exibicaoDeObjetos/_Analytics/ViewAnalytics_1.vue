<template>
  <v-card>
    <v-tabs
      v-model="tab"
      background-color="primary"
      centered
      dark
      icons-and-text
    >
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1">
        Barras
        <v-icon>mdi-google-analytics</v-icon>
      </v-tab>

      <v-tab href="#tab-2">
        Pizza
        <v-icon>mdi-circle-slice-5</v-icon>
      </v-tab>

      <v-tab href="#tab-3">
        Doughnut
        <v-icon>mdi-chart-donut</v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
      :value="'tab-' + 1"
      >
        <v-card flat>
        <Bars />
          
        </v-card>
      </v-tab-item>
      <v-tab-item
      :value="'tab-' + 2"
      >
        <v-card flat>
          <Pie />
        </v-card>
      </v-tab-item>

      <v-tab-item
      :value="'tab-' + 3"
      >
        <v-card flat>
          <Doughnuts />
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import Bars from './_graficos/_Bars.vue'
import Pie from './_graficos/_Pie.vue'
import Doughnuts from './_graficos/_Doughnuts.vue'

export default {
  components: { 
    Bars, 
    Pie, 
    Doughnuts 
  },
  data () {
    return {
      tab: null,
    }
  },

}
</script>

<style>

</style>