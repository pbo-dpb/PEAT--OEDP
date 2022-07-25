<template>
  <div></div>
</template>
<script>
import tableau from "tableau-api";

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
      this.viz = new window.tableau.Viz(
        this.$el,
        "https://public.tableau.com/views/" + vizId,
        this.options
      );
    },
    destroyViz() {
      window.tableau.VizManager.getVizs().forEach(element => {
        element.dispose()
      });
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
  beforeUnmount() {
    
    this.destroyViz();
  }
};
</script>