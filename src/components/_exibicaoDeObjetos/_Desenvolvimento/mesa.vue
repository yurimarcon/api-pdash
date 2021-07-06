<template>
  <div class="scroll-container" ref="scrollContainer">
    <HeaderView />
    <div class="list-container" ref="listContainer">
      <div class="list-item" v-for="(n, index) in 1000" :key="index">
        {{ n }}
      </div>
    </div>
  </div>
</template>

<script>
import HeaderView from '../_HeaderView/_Header.vue'
export default {
  components:{HeaderView},
  methods: {
    
  }
}

</script>
