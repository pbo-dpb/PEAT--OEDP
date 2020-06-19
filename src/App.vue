<style>
.markdown-content p {
  text-rendering: optimizelegibility !important;
}

.markdown-content p,
.markdown-content h2 {
  margin-bottom: 1em;
}

.markdown-content h2 {
  font-size: 1.25em;
  font-weight: 400;
}
</style>

<template>
  <div id="app">
    <top-header></top-header>
    <router-view></router-view>
  </div>
</template>

<script>
const topHeader = require("./components/TopHeader.vue").default;
export default {
  components: {
    topHeader
  }
};
</script>