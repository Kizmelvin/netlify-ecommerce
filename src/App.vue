/* eslint-disable prettier/prettier */
<template>
  <HeaderSection />
  <HomeBanner />
  <MyProducts :products="productsFetched" />
</template>

<script>
import { handler } from "../netlify/functions/getProducts";
import MyProducts from "./components/Products.vue";
import HeaderSection from "./components/Header.vue";
import HomeBanner from "./components/Banner.vue";
export default {
  name: "App",
  components: {
    HeaderSection,
    MyProducts,
    HomeBanner,
  },
  data() {
    return {
      productsFetched: [],
    };
  },
  async created() {
    this.productsFetched = (await handler()).body;
    console.log((await handler()).body);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: -10px;
}
</style>
