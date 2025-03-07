<template>
  <a :href="url"
    class="px-4 xl:px-2 py-2 xl:-ml-2 xl:-mr-2 cursor-pointer font-medium text-blue-800 hover:text-blue-800 dark:text-blue-100 dark:hover:text-blue-200 hover:underline rounded-lg flex items-center min-h-16 text-lg leading-tight mb-4 bg-gray-50 dark:bg-gray-900">
    <slot name="icon"></slot>

    <div>
      {{ title }}
      <div v-if="subtitle" class="text-gray-600 dark:text-gray-400 text-sm font-thin">{{ subtitle }}</div>
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