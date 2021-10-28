import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import AddHabit from '../views/AddHabit.vue';
import HabitDetails from '../views/HabitDetails.vue';
import store from '@/store';

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

router.beforeEach(async (to, from, next) => {
  await store.restored;
  next();
})

export default router
