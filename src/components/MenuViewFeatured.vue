<template>
  <a
    :href="url"
    class="px-4 xl:px-2 py-2 xl:-ml-2 xl:-mr-2 cursor-pointer text-blue-800 font-medium hover:text-blue-800 hover:underline border border-gray-200 rounded-lg flex items-center min-h-16 text-lg leading-tight mb-4"
  >
    <slot name="icon"></slot>

    <div>
      {{ title }}
      <div v-if="subtitle" class="text-gray-600 text-sm font-thin">{{ subtitle }}</div>
    </div>
  </a>
</template>
<script>
export default {
  props: {
    url: String,
    title: String,
    subtitle: String,
  },
};
</script>