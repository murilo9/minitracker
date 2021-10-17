import Habit from '@/types/Habit';
import HabitStatus from '@/types/HabitStatus';
import VuexState from '@/types/VuexState';
import getDateFormat from '@/utils/getDateFormat';
import getHabitDataByDate from '@/utils/getHabitDataByDate';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const nextStatus = function (currentStatus: HabitStatus | null): HabitStatus | null {
  switch (currentStatus) {
    case HabitStatus.DONE: return null;
    case HabitStatus.FAILED: return HabitStatus.DONE;
    case null: return HabitStatus.FAILED;
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
    toggleHabitStatus(state: VuexState, args: { habitId: string, date: Date }) {
      const { habitId, date } = args
      // Find the habit (it MUST exist, but let's check it anyway...)
      const habitToToggle = state.habits.find(habit => habit.id === habitId) as Habit
      // If habit exists
      if (habitToToggle) {
        let currentHabitData = getHabitDataByDate(date, habitToToggle)
        // If there's no habit data for the specified date, create it
        if (!currentHabitData) {
          currentHabitData = {
            status: null,
            date: getDateFormat(new Date())
          }
          habitToToggle.data.push(currentHabitData)
        }
        // Finally, toggles status for the habit data
        currentHabitData.status = nextStatus(currentHabitData.status)
      }
    }
  },
  actions: {
  },
  modules: {
  },
});
