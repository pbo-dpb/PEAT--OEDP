<template>
  <main class="container mx-auto py-4">
    <menu-view :collapsible="true"></menu-view>
    

    <div v-if="content" class="prose max-w-none px-2 md:px-0" v-html="content"></div>
  </main>
</template>
<script>
import locs from "../locs.js";
import { marked } from 'marked';
import MenuView from './MenuView.vue'
import noteUrlEn from '../assets/note_en.md?url'
import noteUrlFr from '../assets/note_fr.md?url'


export default {
  components: {
    /*tableauBreadcrumb: require("./TableauBreadcrumb.vue").default,*/
    MenuView
  },
  data() {
    return { rawNote: null };
  },
  computed: {
    title() {
      return locs[this.$root.language].notes.title;
    },
    content() {
      if (!this.rawNote) {
        return false;
      }
      return marked(this.rawNote);
    },
  },
  watch: {
    "$root.language": function () {
      this.loadNote();
    },
  },
  mounted() {
    this.loadNote();
  },
  methods: {
    loadNote() {
      const language = ["en", "fr"].includes(this.$root.language)
        ? this.$root.language
        : "en";
      fetch(language === 'fr' ? noteUrlFr : noteUrlEn)
        .then((response) => response.text())
        .then((data) => {
          this.rawNote = data;
        });
    },
  },
};
</script>