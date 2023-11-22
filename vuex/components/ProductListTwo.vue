<template>
  <div id="product-list-two">
    <ul>
      <h2>Product List Two</h2>
      <li v-for="(product, index) in saleProducts" :key="index">
        <span class="name"><b>{{ product.name }}</b></span>
        <span class="price">₹{{ product.price }} </span>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  // props: ["products"],
  computed: {
    products() {
      return this.$store.state.products;
    },
    saleProducts() {
      return this.$store.getters.salesProducts;
    },
  },
};
</script>

<style scoped>
#product-list-two {
  background: rgb(85, 112, 202);
  margin-bottom: 30px;
}
#product-list-two h2{
  text-align: center;
}
#product-list-two ul {
  padding: 0%;
  list-style-type: none;
}

#product-list-two li {
  margin-right: 10px;
  margin-top: 5px;
  padding: 10px;
  background: rgb(255, 255, 255, 0.7);
}

.price {
  font-weight: bold;
  color:#3c1a58;
  display: block;
}
</style>