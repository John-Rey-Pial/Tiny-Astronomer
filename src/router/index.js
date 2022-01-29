import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Main from '../views/Main.vue'
import Evaluation from '../views/Evaluation.vue'
import Intro from '../views/Pages/Intro.vue'
import Content from '../views/Pages/Content.vue'
import Progress from '../views/Pages/Progress.vue'
import References from '../views/Pages/References.vue'
import Survey from '../views/Pages/Survey.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Main',
    component: Main,
    children:[

  {
    path: '/intro',
    name: 'Introduction',
    component: Intro
  },
  {
    path: '/content',
    name: 'Content',
    component: Content
  },
  {
    path: '/progress',
    name: 'Progress',
    component: Progress
  },
  {
    path: '/references',
    name: 'References',
    component: References
  },
  {
    path: '/surveys',
    name: 'Surveys',
    component: Survey
  },
  {
    path: '/evaluation',
    name: 'Evaluation',
    component: Evaluation
  },
  ]
  },

]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
