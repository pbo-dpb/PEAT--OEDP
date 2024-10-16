<template>
  <div ref="vizContainer"></div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, watch, ref } from "vue";
import tableau from "tableau-api";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const vizContainer = ref(null);
const viz = ref(null);

const options = ref({
  hideTabs: true,
  onFirstInteractive: function () {
    console.log("Viz is now interactive");
  },
});

const initViz = async (vizId) => {
  if (!vizContainer.value) {
    console.error("Viz container not found");
    return;
  }
  if (viz.value) {
    await destroyViz(); // Ensure previous viz is fully disposed before creating a new one
  }

  // Clear the container
  vizContainer.value.innerHTML = "";

  try {
    viz.value = new window.tableau.Viz(
      vizContainer.value,
      `https://public.tableau.com/views/${vizId}`,
      options.value
    );
  } catch (error) {
    window.location.reload();
  }
};

const destroyViz = async () => {
  if (viz.value) {
    await viz.value.dispose();
    viz.value = null;
  }
};

watch(
  () => props.id,
  (newId) => {
    initViz(newId);
  }
);

onMounted(() => {
  initViz(props.id);
});

onBeforeUnmount(() => {
  destroyViz();
});
</script>
