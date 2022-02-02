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
import Motions from '../views/FirstTopic/Motions.vue'
import Motions0 from '../views/FirstTopic/Motions0.vue'
import Motions1 from '../views/FirstTopic/Motions1.vue'
import Motions2 from '../views/FirstTopic/Motions2.vue'
import Motions3 from '../views/FirstTopic/Motions3.vue'
import QuizIntro from '../views/FirstTopic/QuizIntro.vue'
import Quiz1 from '../../src/components/Topic1/Quiz1/Quiz1.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: '',
    component: Main,
    children: [

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
      {
        path: '/motions',
        name: 'Motions of the Earth',
        component: Motions
      },
      {
        path: '/motions/0',
        name: 'Motions of the Earth',
        component: Motions0
      },
      {
        path: '/motions/1',
        name: 'Motions of the Earth',
        component: Motions1
      },
      {
        path: '/motions/2',
        name: 'Motions of the Earth',
        component: Motions2
      },
      {
        path: '/motions/3',
        name: 'Motions of the Earth',
        component: Motions3
      },
      {
        path: '/quiz1/intro',
        name: 'Quiz: Motions of the Earth',
        component: QuizIntro
      },
      {
        path: '/quiz1/',
        name: 'Quiz: Motions of the Earth',
        component: Quiz1
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
