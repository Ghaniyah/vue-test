<script setup>
import ProductCard from '@/components/ProductCard.vue';
</script>

<template>
  <main>
    <v-row>
      <v-col cols="3" v-for="product in products" :key="product.id">
        <ProductCard :product="product"/>
      </v-col>
    </v-row>
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
            "name": "Jollof Rice",
            "image_url": "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          },
          {
            "id": 2,
            "name": "Spagetti",
            "image_url": "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          },
          {
            "id": 3,
            "name": "Chinesse Rice",
            "image_url": "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          },
          {
            "id": 4,
            "name": "Taraba Beans",
            "image_url": "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          }
        ]
      }
    }
}
</script>
