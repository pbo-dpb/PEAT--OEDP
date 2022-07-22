<template>
  <header>
    
    <div class="border-b border-gray-400">
      <section class="container mx-auto">
        <div class="py-4 flex flex-col md:flex-row-reverse items-center justify-between">
          <nav>
            <h1
              class="text-2xl md:text-4xl font-hairline text-gray-800 text-center md:text-left mt-4 md:mt-0"
            >
              <router-link
                :to="{name:'welcome', params:{'language': $root.language}}"
              >{{ title }}</router-link>
              <br />
            </h1>
          </nav>
        </div>
      </section>
    </div>
  </header>
</template>
<script>
const locs = require("../locs.js").default;
export default {
    computed: {
    title() {
      return locs[this.$root.language].app.title;
    },
  },
};
</script>