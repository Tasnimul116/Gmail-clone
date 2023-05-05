import { createRouter, createWebHistory } from 'vue-router'

import EmailView from '../views/template/EmailView.vue'
import HomeView from '../views/HomeView.vue'
import MessageView from '../views/MessageView.vue'


const routes = [
  
  {
    path: '/email',
    component: EmailView,
    children:[
      {
        path: '',
        component: HomeView
      },
      {
        path: 'message/:id',
        component: MessageView
      }

    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
