<!-- ShoppingCart.vue -->
<template>
    <div class="shopping-cart">
      <h2>Your Cart</h2>
      <div v-if="cart.length === 0">Your cart is empty.</div>
      <div v-else>
        <div v-for="item in cart" :key="item.id" class="cart-item">
          <img :src="item.image" alt="Product Image">
          <div>
            <h3>{{ item.name }}</h3>
            <p>Price: ${{ item.price }}</p>
          </div>
        </div>
        <button @click="completePayment">Complete Payment</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      cart: {
        type: Array,
        required: true,
      },
    },
    methods: {
      completePayment() {
        // Add logic to handle payment completion
        alert('Payment completed!'); // Replace this with your payment processing logic
      },
    },
  };
  </script>
  
  <style scoped>
  .shopping-cart {
    text-align: center;
    padding: 20px;
  }
  
  .cart-item {
    display: flex;
    align-items: center;
    margin: 10px;
    border: 1px solid #ddd;
    padding: 10px;
  }
  </style>
  