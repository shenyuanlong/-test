import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import add from '../views/add.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/add',
      component:add
    }
  ]
})

export default router
