
import Header from './header.vue'

const components = [
  Header
]

const install = function(Vue, opts = {}) {
  if (install.installed) return
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install,
  Header
}