<template>
  <a :href="url"
    class="px-4 xl:px-2 py-2 xl:-ml-2 xl:-mr-2 cursor-pointer font-medium text-sky-800 hover:text-sky-800 dark:text-sky-100 dark:hover:text-sky-200 hover:underline rounded-lg flex items-center min-h-16 text-lg leading-tight mb-4 bg-gray-50 border border-solid border-gray-200  dark:bg-gray-900">
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