<template>
    <section
        class="-mx-8 border-y border-solid border-gray-300 px-8 py-4 mb-16 bg-gray-100 dark:bg-gray-950 flex flex-row justify-between items-center">
        <div class="font-mono text-gray-800 dark:text-white text-center">🔧 DEBUG</div>
        <Button @click="language = (language == 'en' ? 'fr' : 'en')">{{
            language ==
                'en'
                ? 'fr' : 'en' }}</Button>
    </section>
</template>

<script>
import Button from './Button.vue'

export default {
    computed: {
        language: {
            get() {
                return this.$root.language
            },
            set(newValue) {
                this.$root.language = newValue
            }
        }
    },

    components: {
        Button,
    },

};
</script>
