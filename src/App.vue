<template>
  <div id="app">
    <VueNextTimeline :items="items"/>
  </div>
</template>

<script>
import VueNextTimeline from './components/VueNextTimeline.vue'

export default {
  name: 'App',
  components: {
    VueNextTimeline
  },
  data () {
    return {
      items: [
        {
          title: '2013',
          content: 'You need to add',
          color: '#2785ab'
        },
        {
          title: '2014',
          content: 'You need to add',
          color: '#f89714'
        },
        {
          title: '2015',
          content: 'You need to add',
          color: '#f65b78'
        },
        {
          title: '2016',
          content: 'You need to add',
          color: '#196cc7'
        },
        {
          title: '2018',
          content: 'You need to add',
          color: '#364a20'
        }
      ]
    }
  }
}
</script>
