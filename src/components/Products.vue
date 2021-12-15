<template>
  <h2>Products</h2>
  <div class="container">
    <div class="products" :key="item.id" v-for="item in products">
      <div class="containerBucket" :key="item.id">
        <img :src="item.image" :alt="item.title" />
        <div class="details">
          <div>
            <h3>{{ item.title }}</h3>
          </div>
          <div class="priceBtn">
            <h2>Price: ${{ item.price }}</h2>
            <MainButton
              @click="addToCart"
              background="rgb(3, 93, 3)"
              color="white"
              text="Add To Cart"
              size="16px"
            />
          </div>
        </div>
      </div>
      <!-- <SingleItem class="items" :item="item" /> -->
    </div>
  </div>
</template>
<script>
import MainButton from "./Button.vue";
export default {
  name: "MyProducts",
  components: {
    MainButton,
  },
  props: {
    products: Array,
  },
  methods: {
    addToCart() {
      alert("Produt added to cart");
    },
  },
};
</script>
<style scoped>
.container {
  display: grid;
  padding: 5px;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  background: rgb(230, 229, 229);
  /* background: rgb(220, 20, 160); */
}
.products {
  margin: 20px 2px;
  width: 100%;
}
h2 {
  text-align: center;
}
h3 {
  font-weight: 600;
}
.details {
  /* width: 55%; */
  padding: 1rem;
}
.containerBucket {
  display: flex;
  background: rgb(209, 209, 209);
  justify-content: space-between;
  align-items: center;
}
.containerBucket img {
  width: 40%;
  height: 300px;
}
.priceBtn {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media (max-width: 600px) {
  /* .products {
    width: 100%;
  } */
  .containerBucket {
    flex-direction: column;
    width: 50%;
  }
}
</style>
