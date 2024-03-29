// Adapted from https://stackoverflow.com/questions/69808113/how-to-use-vue-router-and-vuex-inside-custom-element-from-root
import { defineCustomElement, h, createApp, getCurrentInstance } from 'vue'
const language = document.documentElement.lang;
import stl from './index.css?inline'

export const defineCustomPeatElement = (component, { plugins = [] }) =>
  defineCustomElement({
    render: () => h(component),
    styles: [stl],
    props: {
      debug: { type: [Boolean, String], default: false },
    },
    data() {
      return {
        language
      }
    },
    setup() {
      //debugger;
      const app = createApp()
      plugins.forEach(app.use)
      const inst = getCurrentInstance()
      Object.assign(inst.appContext, app._context)
      Object.assign(inst.provides, app._context.provides)


    },
  })
