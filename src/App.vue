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
          content: 'The international year of mathematics on planet Earth. The international year of mathematics on planet Earth',
          color: '#2785ab'
        },
        {
          title: '2014',
          content: 'International Year of Family Farming',
          color: '#f89714'
        },
        {
          title: '2015',
          content: 'International Year of Light and Light-Based Technologies',
          color: '#f65b78'
        },
        {
          title: '2016',
          content: 'International Year of the Legumes',
          color: '#196cc7'
        },
        {
          title: '2018',
          content: 'Common year started on Monday in the Gregorian calendar.',
          color: '#364a20'
        },
        {
          title: '2019',
          content: 'Common year started on Tuesday in the Gregorian calendar'
        },
        {
          title: '2020',
          content: 'Marked by a COVID-19 pandemic'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  * {
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
