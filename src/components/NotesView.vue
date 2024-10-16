<template>
  <main class="container mx-auto py-4">
    <menu-view :collapsible="true"></menu-view>
    <div v-if="content" class="prose dark:prose-invert max-w-none px-2 md:px-0 prose-headings:font-thin" v-html="content">
    </div>
  </main>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { marked } from 'marked';
import locs from '../locs.js';
import MenuView from './MenuView.vue';
import noteUrlEn from '../assets/note_en.md?url';
import noteUrlFr from '../assets/note_fr.md?url';
import { useLanguageStore } from '../stores/language.js'

const language = useLanguageStore()

const rawNote = ref(null);

const content = computed(() => {
  return rawNote.value ? marked(rawNote.value) : false;
});

const title = computed(() => locs[language.language].notes.title);

const loadNote = () => {
  const currentLanguage = ["en", "fr"].includes(language.value) ? language.value : "en";
  const noteUrl = currentLanguage === 'fr' ? noteUrlFr : noteUrlEn;
  
  fetch(noteUrl)
    .then((response) => response.text())
    .then((data) => {
      rawNote.value = data;
    });
};

watch(
  () => language.language,
  (newLanguage) => {
    language.value = newLanguage;
    loadNote();
  }
);

onMounted(() => {
  loadNote();
});
</script>
