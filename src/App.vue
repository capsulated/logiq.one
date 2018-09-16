<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
import Resume from './components/resume/Resume.vue'
import Home from './components/home/Home.vue'
import Science from './components/science/Science.vue'

export default {
  name: 'app',
  components: {
    Home, Science, Resume
  }
}
</script>

<style>

</style>
