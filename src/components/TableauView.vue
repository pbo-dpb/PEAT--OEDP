<template>
  <main class="container mx-auto py-4">
    <menu-view :collapsible="true"></menu-view>
    <tableau-embed :id="tableauEmbedId" class="dark:border dark:border-gray-500 dark:shadow-xl"></tableau-embed>
  </main>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import tableauViews from '../tableau-views.js';
import TableauEmbed from './TableauEmbed.vue';
import MenuView from './MenuView.vue';
import { useLanguageStore } from '../stores/language.js'

const language = useLanguageStore()

const route = useRoute();
const router = useRouter();

const tableau = computed(() => {
  const viewId = route.params.viewid;
  return viewId ? tableauViews.find(({ id }) => id === viewId) : null;
});

const tableauEmbedId = computed(() => {
  return tableau.value ? tableau.value[`embed_id_${language.language}`] : null;
});

onMounted(() => {
  if (!tableau.value) {
    router.replace({
      name: 'welcome',
      params: { language: language.language },
    });
  }
});
</script>
