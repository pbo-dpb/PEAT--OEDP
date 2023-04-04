<template>
  <main class="container mx-auto py-4">
    <menu-view :collapsible="true"></menu-view>

    <tableau-embed :id="tableauEmbedId" class="dark:border dark:border-gray-500  dark:shadow-xl"></tableau-embed>
  </main>
</template>
<script>
import tableauViews from "../tableau-views.js";
import TableauEmbed from "./TableauEmbed.vue"
import MenuView from './MenuView.vue'

export default {
  components: {
    TableauEmbed,
    MenuView
  },
  computed: {
    tableauEmbedId() {
      return this.tableau["embed_id_" + this.$root.language];
    },
    tableau() {
      return this.$route.params.viewid
        ? tableauViews.find(({ id }) => id === this.$route.params.viewid)
        : null;
    }
  },
  mounted() {
    if (!this.tableau) {
      // 404
      this.$router.replace({
        name: "welcome",
        params: { language: this.$root.language }
      });
    }
  }
};
</script>
