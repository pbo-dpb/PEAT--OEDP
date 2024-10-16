<template>
  <div id="app">
    <DebugBar v-if="debug.debug"></DebugBar>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { computed } from "vue";
import DebugBar from "./components/DebugBar.vue";
import { useDebugStore } from "./stores/debug";
const debug = useDebugStore();

</script>
