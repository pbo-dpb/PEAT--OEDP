
<template>
  <div id="app">
   <top-header></top-header>
  <router-view></router-view>

  </div>
</template>

<script>

import topHeader from "./components/TopHeader.vue"
export default {
  components: {
    topHeader
  },
  props: {
    publicPath: String,
  },
};
</script>
