/* eslint-disable vue/multi-word-component-names */ /* eslint-disable */

<template>
  <header>
    <h2>Awesome Store</h2>
    <nav>
      <ul>
        <li>Home</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      <h3 class="cart">
        <span>{{ count }}</span
        ><i class="fas fa-shopping-cart"></i>
      </h3>
    </nav>
  </header>
</template>
<script>
export default {
  name: "HeaderSection",
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
};
</script>
<style scoped>
header {
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background: rgb(11, 71, 98); */
  /* color: aliceblue; */
  padding: 1rem;
}
h2 {
  color: yellowgreen;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  /* padding-left: -20px; */
}
ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
}
li {
  list-style: none;
  text-decoration: none;
}
.fas {
  color: greenyellow;
}
.cart {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
