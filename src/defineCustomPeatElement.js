// Adapted from https://vueshowcase.com/question/how-to-use-vue-router-and-vuex-inside-custom-element-from-root
import { defineCustomElement, h, createApp, getCurrentInstance } from 'vue'

export const defineCustomPeatElement = (component, { plugins = [] }) =>
  VueDefineCustomElement({
    render: () => h(component),
    setup() {
      const app = createApp()
      plugins.forEach(app.use)
      const inst = getCurrentInstance()
      Object.assign(inst.appContext, app._context)
      Object.assign(inst.provides, app._context.provides)
    },
  })