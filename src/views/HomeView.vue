<script setup>
import Table from '../components/Table.vue';
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <Table :items="products"/>
  </main>
</template>

<script>
import { ref } from 'vue';
export default {
    data() {
      return {
        products: [
          {
            "id": 1,
            "name": "Biscuit"
          },
          {
            "id": 2,
            "name": "Cookies"
          }
        ]
      }
    }
}
</script>
