<template>
  <div id="app">
    <top-header></top-header>
    <router-view></router-view>
  </div>
</template>

<script>
const language = document.documentElement.lang;
const topHeader = require("./components/TopHeader.vue").default;
export default {
  components: {
    topHeader
  },
  data() {
    return {
      language: language,
    };
  },
};
</script>
<style>
@import "./index.css";
</style>
