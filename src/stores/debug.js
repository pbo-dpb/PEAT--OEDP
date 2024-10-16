import { defineStore } from "pinia";

export const useDebugStore = defineStore("debug", {
  state: () => {
    return { debug: true };
  },

  actions: {
    change() {
      this.debug = this.debug === true ? false : true;
    },
  },
});
