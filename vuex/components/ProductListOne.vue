<template>
  <div id="product-list-one">
    <ul>
      <h2>Product List One</h2>
      <li v-for="(product, index) in salesProducts" :key="index">
        <span class="name"><b>{{ product.name }}</b></span>
        <span class="price"> ₹{{ product.price }}</span>
      </li>
    </ul>
    <v-btn color="primary" v-on:click="reducePrice(2)">Reduce Price</v-btn>
  </div>
</template>


<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  // props: ["products"],
  computed: {
    products() {
      return this.$store.state.products;
    },
    // salesProducts() {
    //   return this.$store.getters.salesProducts;
    // },
    ...mapGetters(["salesProducts"]),
  },
  methods: {
    // reducePrice(amount) {
    //   this.$store.dispatch("reducePrice", amount);
    // },
    ...mapActions(["reducePrice"]),
  },
};
</script>

<style scoped>
#product-list-one {
  background: rgb(165, 85, 202);
  margin-bottom: 30px;
}
#product-list-one h2{
  text-align: center;
}

#product-list-one ul {
  padding: 0%;
  list-style-type: none;
}

#product-list-one li{
  margin-right: 10px;
  margin-top:10px;
  padding:10px;
  background:rgb(255,255,255,0.7);
}
</style>

