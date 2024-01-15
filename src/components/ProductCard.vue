<template>
    <v-card
    class="mx-auto"
  >
    <v-img
      :src="product.image_url"
      cover
    ></v-img>

    <v-card-title>
      {{ product.name }}
    </v-card-title>

    <v-card-actions>
      <v-btn
        color="orange-lighten-2"
        variant="text"
      >
        Add to cart
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    props: ['product']
}
</script>