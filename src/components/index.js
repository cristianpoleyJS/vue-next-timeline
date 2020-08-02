import Vue from 'vue'
import VueNextTimeline from './VueNextTimeline.vue'

const Components = {
  VueNextTimeline
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
