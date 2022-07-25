<template>
  <main class="container mx-auto py-4">
    <menu-view :collapsible="true"></menu-view>
    <div class="flex flex-row justify-between">
      <tableau-breadcrumb :current="tableau['title_'+ $root.language]"></tableau-breadcrumb>
    </div>
    <tableau-embed :id="tableauEmbedId"></tableau-embed>
  </main>
</template>
<script>
import tableauViews from "../tableau-views.js";

export default {
  components: {
    /*tableauEmbed: require("./TableauEmbed.vue").default,
    tableauBreadcrumb: require("./TableauBreadcrumb.vue").default,
    menuView: require("./MenuView.vue").default*/
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
