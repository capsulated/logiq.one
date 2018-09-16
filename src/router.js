import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home/Home.vue'
import Resume from './components/resume/Resume.vue'
import Science from './components/science/Science.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume
    },
    {
      path: '/science',
      name: 'science',
      component: Science
    }
  ]
})