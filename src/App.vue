<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
import Resume from './components/resume/Resume.vue'
import Home from './components/home/Home.vue'
import Science from './components/science/Science.vue'
import Abstract from './components/science/Abstract.vue'
import Chapter1 from './components/science/Chapter1.vue'
import Chapter2 from './components/science/Chapter2.vue'
import Chapter3 from './components/science/Chapter3.vue'
import Chapter4 from './components/science/Chapter4.vue'

export default {
  name: 'app',
  components: {
    Home, Science, Resume, Abstract, Chapter1, Chapter2, Chapter3, Chapter4
  }
}
</script>

<style>

</style>
