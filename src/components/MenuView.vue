<template>
  <div class="w-full flex flex-col gap-4">

<div class="bg-orange-200 p-4 rounded text-orange-900 font-semibold text-center lg:hidden">
  {{ mobileWarning }}
</div>

    <ul
      v-if="tableauLinks"
      :class="{'flex': collapsible, 'flex-row': collapsible, 'mb-4': collapsible, 'flex-wrap': collapsible, 'justify-center':collapsible, 'xl:justify-between':collapsible, 'flex-shrink': collapsible, 'border-gray-100': collapsible, 'border': collapsible, 'xl:border-0': collapsible, 'p-2' : collapsible, 'xl:p-0':collapsible
      }"
    >
      <router-link
        v-for="link in tableauLinks"
        :key="link.title"
        :to="link.destination"
        v-slot="{ href, route, navigate }"
      >
        <li
          @click="navigate"
          class="px-4 xl:px-2 py-2 xl:mr-0 xl:-ml-2 xl:-mr-2 cursor-pointer text-blue-800 font-medium hover:text-blue-800 hover:underline"
          :class="{'mx-2': collapsible, 'bg-gray-200': (!collapsible || isActiveLink(link)), 'mb-2': !collapsible, 'text-base':($root.language === 'en'), 'text-sm': ($root.language === 'fr')}"
        >
          <a :href="href" @click="navigate">{{ link.title }}</a>
        </li>
      </router-link>
    </ul>

    <div
      v-if="!collapsible"
      class="mt-4 pt-4 border-t border-gray-200 flex flex-col xl:px-2 xl:mr-0 xl:-ml-2 xl:-mr-2"
    >
      <menu-view-featured
        v-for="reportLocalization in reportsLocalizations"
        :key="reportLocalization.url"
        :url="reportLocalization.url"
        :title="reportLocalization.title"
        :subtitle="reportLocalization.subtitle"
      >
        <template v-slot:icon>
          <img
            class="w-12 xl:w-8 mr-2 shadow-xs"
            :src="reportLocalization.thumbnail"
            :alt="reportLocalization.title"
          />
        </template>
      </menu-view-featured>

      <menu-view-featured
        :url="databaseLocalization.url"
        :title="databaseLocalization.title"
        :subtitle="databaseLocalization.subtitle"
      >
        <template v-slot:icon>
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            class="database w-12 xl:w-8 h-12 xl:h-8 mr-2"
          >
            <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
            <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
            <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
          </svg>
        </template>
      </menu-view-featured>
    </div>
  </div>
</template>

<script>
import tableauViews from "../tableau-views.js";
import locs from "../locs.js";
import MenuViewFeatured from "./MenuViewFeatured.vue";

export default {
  components: {
    MenuViewFeatured,
  },
  props: {
    collapsible: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    tableauLinks() {
      let links = [];

      if (this.collapsible) {
        links.push({
          title: locs[this.$root.language].welcome.title,
          destination: {
            name: "welcome",
            
          },
        });
      }

      links = links.concat(
        tableauViews.map((view) => {
          return {
            title: view["title_" + this.$root.language],
            destination: {
              name: "tableau",
              params: {
                viewid: view.id,
              },
            },
          };
        })
      );

      links.push({
        title: locs[this.$root.language].notes.title,
        destination: {
          name: "notes",
         
        },
      });
      return links;
    },

    databaseLocalization() {
      return locs[this.$root.language].nav.database;
    },
    reportsLocalizations() {
      return locs[this.$root.language].nav.reports;
    },
    mobileWarning() {
      return locs[this.$root.language].mobile_warning;
    }
  },
  methods: {
    isActiveLink(link) {
      if (link.destination.name === "tableau") {
        return link.destination.params.viewid === this.$route.params.viewid;
      }
      return link.destination.name === this.$route.name;
    },
  },
};
</script>
