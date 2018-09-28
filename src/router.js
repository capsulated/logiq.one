import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home/Home.vue'
import Resume from './components/resume/Resume.vue'
import Science from './components/science/Science.vue'
import Abstract from './components/science/Abstract.vue'
import Chapter1 from './components/science/Chapter1.vue'
import Chapter2 from './components/science/Chapter2.vue'
import Chapter3 from './components/science/Chapter3.vue'
import Chapter4 from './components/science/Chapter4.vue'

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
      component: Science,
    },
    {
      path: '/abstract',
      name: 'abstract',
      component: Abstract
    },
    {
      path: '/chapter1',
      name: 'chapter1',
      component: Chapter1
    },
    {
      path: '/chapter2',
      name: 'chapter2',
      component: Chapter2
    },
    {
      path: '/chapter3',
      name: 'chapter3',
      component: Chapter3
    },
    {
      path: '/chapter4',
      name: 'chapter4',
      component: Chapter4
    }
  ]
})