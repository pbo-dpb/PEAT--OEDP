<template>
  <main class="container mx-auto py-4">
    <menu-view :collapsible="true"></menu-view>
    <div class="flex flex-row justify-between">
      <tableau-breadcrumb :current="tableau['title_'+ $route.params.language]"></tableau-breadcrumb>
    </div>
    <tableau-embed :id="tableauEmbedId"></tableau-embed>
  </main>
</template>
<script>
const tableauViews = require("../tableau-views.js").default;

export default {
  components: {
    tableauEmbed: require("./TableauEmbed.vue").default,
    tableauBreadcrumb: require("./TableauBreadcrumb.vue").default,
    menuView: require("./MenuView.vue").default
  },
  computed: {
    tableauEmbedId() {
      return this.tableau["embed_id_" + this.$route.params.language];
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
        params: { language: this.$route.params.language }
      });
    }
  }
};
</script>