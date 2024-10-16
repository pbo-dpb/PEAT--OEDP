import { defineStore } from "pinia";

export const useLanguageStore = defineStore("language", {
  state: () => {
    return { language: "en" };
  },

  actions: {
    change() {
      this.language = this.language === "en" ? "fr" : "en";
    },
  },
});
