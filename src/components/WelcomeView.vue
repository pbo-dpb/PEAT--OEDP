<template>
  <main class="px-2 py-4">
    <div class="container mx-auto">
      <section class="lg:grid grid-cols-4 gap-4">
        <nav class="lg:col-span-1">
          <menu-view></menu-view>
        </nav>

        <div class="lg:col-span-3 prose max-w-none prose-headings:font-thin" v-html="content"></div>
      </section>
    </div>
  </main>
</template>
<script>
import locs from "../locs.js";
import { marked } from 'marked';
import MenuView from './MenuView.vue'

export default {
  components: {
    MenuView
  },
  computed: {
    content() {
      return marked(locs[this.$root.language].welcome.content);
    }
  }
};
</script>