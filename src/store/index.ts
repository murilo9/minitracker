import Habit from '@/types/Habit';
import HabitStatus from '@/types/HabitStatus';
import VuexState from '@/types/VuexState';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const nextStatus = function (currentStatus: HabitStatus): HabitStatus {
  switch (currentStatus) {
    case HabitStatus.DONE: return HabitStatus.SKIPPED;
    case HabitStatus.FAILED: return HabitStatus.DONE;
    case HabitStatus.SKIPPED: return HabitStatus.FAILED;
  }
}

export default new Vuex.Store({
  state: {
    habits: []
  },
  mutations: {
    addHabit(state: VuexState, habit: Habit) {
      state.habits.push(habit)
    },
    toggleHabitStatus(state: VuexState, habitId: string) {
      const habitToToggle = state.habits.find(habit => habit.id === habitId) as Habit
      if (habitToToggle) {
        const currentStatus = habitToToggle.data[0].status;
        habitToToggle.data[0].status = nextStatus(currentStatus);
        // TODO: alter propper index
      }
    }
  },
  actions: {
  },
  modules: {
  },
});
