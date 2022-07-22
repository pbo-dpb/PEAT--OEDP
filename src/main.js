import { defineCustomPeatElement } from './defineCustomPeatElement'
import router from './router'
import App from "./App.ce.vue"

customElements.define('pbotool-peat', defineCustomPeatElement(App, {plugins: [ router ]}))