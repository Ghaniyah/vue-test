import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

new Vue({
    el: '#app',
    data: {
        colors: ['Red', 'Blue', 'Green'],
        sizes: ['Small', 'Medium', 'Large'],
        selectedColor: '',
        selectedSize: '',
        isInStock: false
    },
    methods: {
        checkAvailability() {
            // Simulate some logic to check if the product is in stock
            this.isInStock = Math.random() < 0.8; // 80% chance of being in stock

            if (this.isInStock) {
                alert(`Product is in stock! Selected color: ${this.selectedColor}, size: ${this.selectedSize}`);
            } else {
                alert('Product is sold out.');
            }
        }
    },
    template: `
        <div class="product-container">
            <h1>Product Name</h1>
            
            <div class="options">
                <label for="color">Color:</label>
                <select id="color" v-model="selectedColor">
                    <option v-for="color in colors" :key="color" :value="color">{{ color }}</option>
                </select>

                <label for="size">Size:</label>
                <select id="size" v-model="selectedSize">
                    <option v-for="size in sizes" :key="size" :value="size">{{ size }}</option>
                </select>
            </div>

            <div class="availability">
                <button @click="checkAvailability" :disabled="!selectedColor || !selectedSize">Check Availability</button>
                <p v-if="isInStock" style="color: green;">Product is in stock!</p>
                <p v-else style="color: red;">Product is sold out.</p>
            </div>
        </div>
    `
});

app.use(router)

app.mount('#app')
