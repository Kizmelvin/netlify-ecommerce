<template>
  <button :style="{ background: background, color: color, fontSize: size }">
    {{ text }}
  </button>
</template>
<script>
export default {
  name: "MainButton",
  props: {
    text: String,
    background: String,
    color: String,
    size: String,
  },
};
</script>
<style scoped>
button {
  cursor: pointer;
  border: none;
  font-weight: 600;
  padding: 1rem;
  border-radius: 0.5rem;
}
</style>
