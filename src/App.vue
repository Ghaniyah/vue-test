<template>
    <v-app>
      <v-app-bar app color="primary">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>YOUR M</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon>mdi-account-circle</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="navigateToProfile">
              <v-list-item-title>Profile</v-list-item-title>
            </v-list-item>
            <v-list-item @click="logout">
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
  
      <v-main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
  export default {
    data() {
      return {
        drawer: false,
      };
    },
    methods: {
      navigateToProfile() {
        // Add logic to navigate to the user's profile page
      },
      logout() {
        // Add logic to handle user logout
      },
    },
  };
  </script>
  
  
<!-- App.vue -->
<template>
  <div id="app">
    <h1>Product Page</h1>
    <Product v-for="product in products" :key="product.id" :product="product" @addToCart="addToCart" />
    <ShoppingCart :cart="cart" />
  </div>
</template>

<script>
import Product from './Product.vue';
import ShoppingCart from './ShoppingCart.vue';

export default {
  components: {
    Product,
    ShoppingCart,
  },
  data() {
    return {
      products: [
        { id: 1, name: 'Product 1', image: '/images/product1.jpg', price: 19.99, inStock: true },
        { id: 2, name: 'Product 2', image: '/images/product2.jpg', price: 29.99, inStock: false },
        // Add more products as needed
      ],
      cart: [],
    };
  },
  methods: {
    addToCart(product) {
      this.cart.push(product);
    },
  },
};
</script>

<style>
#app {
  text-align: center;
  padding: 20px;
}
</style>


