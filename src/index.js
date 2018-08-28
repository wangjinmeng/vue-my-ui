import Button from '../packages/components/button/index.js'
import Card from '../packages/components/card/index.js'

const components = [
  Button,
  Card
]

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Button
}
