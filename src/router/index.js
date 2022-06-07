import { createRouter, createWebHistory } from 'vue-router'
import NavBar from '../views/NavBar.vue'
import Main from '../views/Main.vue'

const routes = [
  {
    path: '/',
    name: 'NavBar',
    component: NavBar,
    children: [
      {name: "Main", path: "/", component: Main}
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
