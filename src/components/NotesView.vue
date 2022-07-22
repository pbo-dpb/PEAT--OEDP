<template>
  <main class="container mx-auto py-4">
    <menu-view :collapsible="true"></menu-view>
    <div class="flex flex-row justify-between">
      <tableau-breadcrumb :current="title"></tableau-breadcrumb>
    </div>

    <div v-if="content" class="markdown px-2 md:px-0" v-html="content"></div>
  </main>
</template>
<script>
const locs = require("../locs.js").default;
import marked from "marked";
export default {
  components: {
    tableauBreadcrumb: require("./TableauBreadcrumb.vue").default,
    menuView: require("./MenuView.vue").default,
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
      fetch(`/note_${language}.md`)
        .then((response) => response.text())
        .then((data) => {
          this.rawNote = data;
        });
    },
  },
};
</script>