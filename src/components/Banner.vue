<template>
  <div class="banner">
    <div class="banner-img">
      <img
        src="https://res.cloudinary.com/kizmelvin/image/upload/c_scale,h_494/v1638881213/kizmelvin/photo-1638378853112-d084cc3628e2_kv3cjx.jpg"
        alt="banner"
      />
    </div>
    <div class="banner-btn">
      <h1>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. In illo
        suscipit impedit. <br />
        Similique, nesciunt quisquam!
      </h1>
      <MainButton
        @click="onClick()"
        text="Shop Now"
        background="rgb(162, 197, 7)"
        color="white"
        size="1.6rem"
      />
    </div>
  </div>
</template>
<script>
import MainButton from "./Button.vue";
export default {
  name: "HomeBanner",
  setup() {},
  methods: {
    onClick() {
      alert("btn clicked");
    },
  },
  components: {
    MainButton,
  },
};
</script>
<style scoped>
.banner {
  /* width: 100vw; */
  height: 400px;
  position: relative;
  text-align: center;
}
.banner-img {
  /* width: 100vw; */
  height: 400px;
}
.banner-img img {
  width: 100%;
  height: 100%;
}
.banner-btn {
  position: relative;
  bottom: 50%;
}
.banner-btn h1 {
  font-size: 1.4rem;
  font-weight: 400;
  color: white;
}
</style>
