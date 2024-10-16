<template>
  <section
    class="-mx-8 border-y border-gray-300 px-8 py-4 mb-16 bg-gray-100 dark:bg-gray-950 flex flex-row justify-between items-center"
  >
    <div class="font-mono text-gray-800 dark:text-white text-center">
      🔧 DEBUG
    </div>
    <Button @click="language.change()">{{
      language.language == "en" ? "fr" : "en"
    }}</Button>
  </section>
</template>

<script setup>
import Button from "./Button.vue";
import { useLanguageStore } from "../stores/language";

const language = useLanguageStore();

</script>
