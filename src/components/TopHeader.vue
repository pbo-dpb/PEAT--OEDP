<template>
  <header class="border-b border-gray-400">
    <section class="container mx-auto">
      <div class="py-4 flex flex-col md:flex-row-reverse items-center justify-between">
        <a :href="url">
          <img :src="logo" class="w-full md:w-64" :alt="logoAlt" />
        </a>
        <nav>
          <h1
            class="text-2xl md:text-4xl font-hairline text-gray-800 text-center md:text-left mt-4 md:mt-0"
          >
            <router-link
              :to="{name:'welcome', params:{'language': $route.params.language}}"
            >{{ title }}</router-link>
            <br />
          </h1>
          <div class="text-blue-800 underline text-sm -mt-1">
            <router-link
              v-if="this.$route.params.language === 'en'"
              :to="{params:{'language': 'fr'}}"
            >Français</router-link>
            <router-link
              v-if="this.$route.params.language === 'fr'"
              :to="{params:{'language': 'en'}}"
            >English</router-link>
          </div>
        </nav>
      </div>
    </section>
  </header>
</template>
<script>
const locs = require("../locs.js").default;
export default {
  computed: {
    url() {
      return "https://www.pbo-dpb.gc.ca/" + this.$route.params.language;
    },
    logo() {
      return `https://www.pbo-dpb.gc.ca/web/default/files/public/public/2019-08-19_Full_logo_${
        this.$route.params.language === "fr" ? "f" : "e"
      }-01.svg`;
    },
    logoAlt() {
      return locs[this.$route.params.language].app.logo_alt;
    },
    title() {
      return locs[this.$route.params.language].app.title;
    },
  },
};
</script>