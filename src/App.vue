<template>
  <div id="app">
    <VueNextTimeline :items="items" :horizontal="true"/>
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
          title: 'Your title',
          content: 'Free space information to expand on your topic',
          color: 'red',
          lineText: 'Jan'
        },
        {
          title: 'Your title2',
          content: 'Free space information to expand on your topic',
          color: 'gray',
          lineText: 'Feb'
        },
        {
          title: 'Your title3',
          content: 'Free space information to expand on your topic',
          color: 'blue',
          lineText: 'Mar'
        },
        {
          title: 'Your title3',
          content: 'Free space information to expand on your topic',
          color: 'green',
          lineText: 'Apr'
        },
        {
          title: 'Your title3',
          content: 'Free space information to expand on your topic',
          color: 'orange',
          lineText: 'May'
        },
        {
          title: 'Your title3',
          content: 'Free space information to expand on your topic',
          color: 'yellow',
          lineText: 'Jun'
        },
        {
          title: 'Your title3',
          content: 'Free space information to expand on your topic',
          color: 'brown',
          lineText: 'Jul'
        },
        {
          title: 'Your title3',
          content: 'Free space information to expand on your topic',
          color: 'black',
          lineText: 'Aug'
        },
        {
          title: 'Your title3',
          content: 'Free space information to expand on your topic',
          lineText: 'Sep'
        },
        {
          title: 'Your title3',
          content: 'Free space information to expand on your topic',
          lineText: 'Oct'
        },
        {
          title: 'Your title3',
          content: 'Free space information to expand on your topic',
          lineText: 'Nov'
        },
        {
          title: 'Your title3',
          content: 'Free space information to expand on your topic',
          lineText: 'Dec'
        }
      ]
    }
  }
}
</script>
