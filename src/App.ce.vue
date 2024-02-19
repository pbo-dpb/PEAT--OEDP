
<template>
  <div id="app">
    <DebugBar v-if="debug"></DebugBar>
    <router-view></router-view>

  </div>
</template>

<script>
import DebugBar from './components/DebugBar.vue'
export default {
  computed: {
    debug() {
      return this.$root.debug;
    },
  },
  components: {
    DebugBar,
  },

};
</script>
