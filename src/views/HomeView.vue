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
            "name": "Red Dress",
            "image_url": "./public/image/reddress.jpeg"
          },
          {
            "id": 2,
            "name": "Blue Dress",
            "image_url": "./public/image/bluedress.jpeg"
          },
          {
            "id": 3,
            "name": "Striped Dress",
            "image_url": "./public/image/stripedress.jpeg"
          },
          {
            "id": 4,
            "name": "Red Short",
            "image_url": "./public/image/redshort.jpeg"
          }
        ]
      }
    }
}
</script>
