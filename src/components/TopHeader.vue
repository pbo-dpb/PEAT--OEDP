<template>
  <header>
    
           <h1
              class="text-4xl leading-none font-thin mb-4"
            >
              <router-link
                :to="{name:'welcome', params:{'language': $root.language}}"
              >{{ title }}</router-link>
            </h1>
  </header>
</template>
<script>
import locs from "../locs.js"

export default {
    computed: {
    title() {
      return locs[this.$root.language].app.title;
    },
  },
};
</script>

