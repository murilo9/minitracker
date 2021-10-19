import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import AddHabit from '../views/AddHabit.vue';
import HabitDetails from '../views/HabitDetails.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add',
    name: 'AddHabit',
    component: AddHabit
  },
  {
    path: '/details/:habitId',
    name: 'HabitDetails',
    component: HabitDetails
  },
]

const router = new VueRouter({
  routes
})

export default router
