import { createRouter, createWebHistory } from 'vue-router'
import NavBar from '../views/NavBar.vue'
import Next from '../views/Next.vue'

const routes = [
  {
    path: '/',
    name: 'NavBar',
    component: NavBar,
    children: [
      {name: "Next", path: "/a", component: Next}
    ]
  },
  // {
  //   path: '/b',
  //   name: "Next",
  //   component: Next
  // }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
