<template>
  <main class="px-2 py-4">
    <div class="container mx-auto">
      <section class="lg:grid lg:grid-cols-4 lg:gap-4">
        <nav class="lg:col-span-1">
          <menu-view></menu-view>
        </nav>

        <div class="lg:col-span-3 markdown" v-html="content"></div>
      </section>
    </div>
  </main>
</template>
<script>
const locs = require("../locs.js").default;
import marked from "marked";

export default {
  components: {
    menuView: require("./MenuView.vue").default
  },
  computed: {
    content() {
      return marked(locs[this.$route.params.language].welcome.content);
    }
  }
};
</script>