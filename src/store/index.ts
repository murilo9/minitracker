import DateFormat from '@/types/DateFormat';
import Habit from '@/types/Habit';
import HabitStatus from '@/types/HabitStatus';
import VuexState from '@/types/VuexState';
import getHabitDataByDateFormat from '@/utils/getHabitDataByDateFormat';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const nextStatus = function (currentStatus: HabitStatus | null | undefined): HabitStatus {
  switch (currentStatus) {
    case HabitStatus.DONE: return HabitStatus.FAILED;
    case HabitStatus.FAILED: return HabitStatus.SKIPPED;
    case HabitStatus.SKIPPED: return HabitStatus.DONE;
    default: return HabitStatus.DONE;
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
    toggleHabitStatus(state: VuexState, args: { habitId: string, date: DateFormat }) {
      const { habitId, date } = args
      // Find the habit (it MUST exist, but let's check it anyway...)
      const habitToToggle = state.habits.find(habit => habit.id === habitId) as Habit
      // If habit exists
      if (habitToToggle) {
        let currentHabitData = getHabitDataByDateFormat(date, habitToToggle)
        // If there's no habit data for the specified date, create it
        if (!currentHabitData) {
          currentHabitData = {
            status: null,
            date: date
          }
          habitToToggle.data.push(currentHabitData)
        }
        // If there's habit data for the specified date, update it
        else {
          const currentStatus = currentHabitData.status
          currentHabitData.status = nextStatus(currentStatus)
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
