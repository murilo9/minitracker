import Habit from '@/types/Habit';
import VuexState from '@/types/VuexState';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    habits: []
  },
  mutations: {
    addHabit(state: VuexState, habit: Habit) {
      state.habits.push(habit)
    }
  },
  actions: {
  },
  modules: {
  },
});
