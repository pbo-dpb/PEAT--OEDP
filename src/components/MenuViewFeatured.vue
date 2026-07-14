<template>
    <a
        :href="url"
        class="mb-4 flex min-h-16 cursor-pointer items-center rounded-lg border border-solid border-gray-200 bg-gray-50 px-4 py-2 text-lg leading-tight font-medium text-sky-800 hover:text-sky-800 hover:underline xl:-mr-2 xl:-ml-2 xl:px-2 dark:bg-gray-900 dark:text-sky-100 dark:hover:text-sky-200">
        <slot name="icon"></slot>

        <div>
            {{ title }}
            <div
                v-if="subtitle"
                class="text-sm font-thin text-gray-600 dark:text-gray-400">
                {{ subtitle }}
            </div>
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
