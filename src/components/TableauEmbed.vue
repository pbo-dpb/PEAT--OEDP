<template>
  <div></div>
</template>
<script>
export default {
  data() {
    return {
      options: {
        hideTabs: true
      },
      viz: null
    };
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    initViz(vizId) {
      this.viz = new tableau.Viz(
        this.$el,
        "https://public.tableau.com/views/" + vizId,
        this.options
      );
    },
    destroyViz() {
      this.viz.dispose();
    }
  },
  watch: {
    id: function(newId) {
      this.destroyViz();
      this.$nextTick(() => {
        this.initViz(newId);
      });
    }
  },

  mounted() {
    this.initViz(this.id);
  },
  beforeDestroy() {
    this.destroyViz();
  }
};
</script>