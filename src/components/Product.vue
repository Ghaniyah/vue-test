<!-- Product.vue -->
<template>
    <div class="product">
      <img :src="product.image" alt="Product Image">
      <h3>{{ product.name }}</h3>
      <p>Price: ${{ product.price }}</p>
      <p v-if="product.inStock">In Stock</p>
      <p v-else>Out of Stock</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .product {
    border: 1px solid #ddd;
    padding: 10px;
    margin: 10px;
    text-align: center;
  }
  </style>
  