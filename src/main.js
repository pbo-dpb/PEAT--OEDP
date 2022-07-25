import { defineCustomPeatElement } from './defineCustomPeatElement'
import App from "./App.ce.vue"
import router from './router'

customElements.define('pbotool-peat', defineCustomPeatElement(App, {plugins: [ router ]}))