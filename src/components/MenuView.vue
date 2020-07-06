<template>
  <div class="w-full">
    <ul
      v-if="tableauLinks"
      :class="{'flex': collapsible, 'flex-row': collapsible, 'mb-4': collapsible, 'flex-wrap': collapsible, 'justify-center':collapsible, 'flex-shrink': collapsible}"
    >
      <router-link
        v-for="link in tableauLinks"
        :key="link.title"
        :to="link.destination"
        v-slot="{ href, route, navigate }"
      >
        <li
          @click="navigate"
          class="md:-ml-2 px-4 py-2 cursor-pointer text-blue-800 text-lg font-medium hover:text-blue-800 hover:underline"
          :class="{'bg-gray-200': !collapsible || isActiveLink(link), 'mb-2': !collapsible}"
        >
          <a :href="href" @click="navigate">{{ link.title }}</a>
        </li>
      </router-link>
    </ul>
  </div>
</template>
<script>
const tableauViews = require("../tableau-views.js").default;
const locs = require("../locs.js").default;

export default {
  props: {
    collapsible: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    tableauLinks() {
      let links = [];

      if (this.collapsible) {
        links.push({
          title: locs[this.$route.params.language].welcome.title,
          destination: {
            name: "welcome",
            params: {
              language: this.$route.params.language
            }
          }
        });
      }

      links = links.concat(
        tableauViews.map(view => {
          return {
            title: view["title_" + this.$route.params.language],
            destination: {
              name: "tableau",
              params: {
                viewid: view.id,
                language: this.$route.params.language
              }
            }
          };
        })
      );

      links.push({
        title: locs[this.$route.params.language].notes.title,
        destination: {
          name: "notes",
          params: {
            language: this.$route.params.language
          }
        }
      });
      return links;
    }
  },
  methods: {
    isActiveLink(link) {
      if (link.destination.name === "tableau") {
        return link.destination.params.viewid === this.$route.params.viewid;
      }
      return link.destination.name === this.$route.name;
    }
  }
};
</script>