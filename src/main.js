import { defineCustomPeatElement } from "./defineCustomPeatElement";
import { createPinia } from "pinia";
import App from "./App.ce.vue";
import router from "./router";

const pinia = createPinia();

customElements.define(
  "pbotool-peat",
  defineCustomPeatElement(App, { plugins: [router, pinia] })
);
