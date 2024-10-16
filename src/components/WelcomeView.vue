<template>
  <main class="px-2 py-4">
    <div class="container mx-auto">
      <section class="lg:grid grid-cols-4 gap-4">
        <nav class="lg:col-span-1">
          <menu-view></menu-view>
        </nav>

        <div
          class="lg:col-span-3 prose dark:prose-invert max-w-none prose-headings:font-thin"
          v-html="content"
        ></div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { computed } from "vue";
import { marked } from "marked";
import locs from "../locs.js";
import MenuView from "./MenuView.vue";
import { useLanguageStore } from "../stores/language.js";

const language = useLanguageStore();

const content = computed(() => {
  return marked(locs[language.language].welcome.content);
});
</script>
