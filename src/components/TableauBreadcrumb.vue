<template>
  <nav
    class="mb-4 px-2 md:px-0 bg-gray-100 md:bg-transparent text-xs md:text-base w-full py-2 md:py-0"
    aria-label="breadcrumbs"
  >
    <ol class="flex">
      <li class="mr-2 text-blue-800 underline">
        <router-link
          :to="{name:'welcome', params:{'language': $route.params.language}}"
        >{{ appTitle }}</router-link>
      </li>
      <li class="mr-2 text-gray-400" aria-hidden="true">/</li>
      <li>
        <a aria-current="page">{{ current }}</a>
      </li>
    </ol>
  </nav>
</template>
<script>
const locs = require("../locs.js").default;
export default {
  computed: {
    appTitle() {
      return locs[this.$route.params.language].app.title;
    }
  },
  props: {
    current: String
  }
};
</script>