import DateFormat from '@/types/DateFormat';
import Habit from '@/types/Habit';
import HabitNote from '@/types/HabitNote';
import HabitStatus from '@/types/HabitStatus';
import VuexState from '@/types/VuexState';
import compareDateFormats from '@/utils/compareDateFormats';
import getHabitAcomplishmentByDateFormat from '@/utils/getHabitAcomplishmentByDateFormat';
import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence, { AsyncStorage } from 'vuex-persist';
import localForage from 'localforage';

const vuexLocal = new VuexPersistence({
  storage: localForage as AsyncStorage,
  asyncStorage: true
});

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
      // Emit event to service worker
      navigator.serviceWorker.controller?.postMessage({
        type: 'HABITS_UPDATED',
        payload: state.habits
      });
    },
    toggleHabitStatus(state: VuexState, args: { habitId: string, date: DateFormat }) {
      const { habitId, date } = args
      // Find the habit (it MUST exist, but let's check it anyway...)
      const habitToToggle = state.habits.find(habit => habit.id === habitId) as Habit
      // If habit exists
      if (habitToToggle) {
        let currentHabitAcomplishment = getHabitAcomplishmentByDateFormat(date, habitToToggle)
        // If there's no habit acomplishment for the specified date, create it
        if (!currentHabitAcomplishment) {
          currentHabitAcomplishment = {
            status: null,
            date: date
          }
          habitToToggle.acomplishments.push(currentHabitAcomplishment)
        }
        // If there's habit acomplishment for the specified date, update it
        else {
          const currentStatus = currentHabitAcomplishment.status
          currentHabitAcomplishment.status = nextStatus(currentStatus)
        }
        // Finally, toggles status for the habit acomplishment
        currentHabitAcomplishment.status = nextStatus(currentHabitAcomplishment.status)
        // Emit event to service worker
        navigator.serviceWorker.controller?.postMessage({
          type: 'HABITS_UPDATED',
          payload: state.habits
        });
      }
    },
    deleteHabit(state: VuexState, habitId: string) {
      // Find the habit index (it MUST exist, but let's check it anyway...)
      const habitToDeleteIndex = state.habits.findIndex(habit => habit.id === habitId);
      // If habit exists
      if (habitToDeleteIndex > -1) {
        state.habits.splice(habitToDeleteIndex, 1);
        // Emit event to service worker
        navigator.serviceWorker.controller?.postMessage({
          type: 'HABITS_UPDATED',
          payload: state.habits
        });
      }
    },
    saveHabitNote(state: VuexState, payload: { habitId: string, date: DateFormat, text: string }) {
      const { habitId, date, text } = payload;
      const habit = state.habits.find((habit: Habit) => habit.id === habitId)
      if (habit) {
        const existingNoteIndex = habit.notes.findIndex((habitNote: HabitNote) => compareDateFormats(habitNote.date, date))
        // If there's already a note for this date
        if (existingNoteIndex >= 0) {
          // Switch the existing note by the updated one
          const updatedNote = { text, date }
          habit.notes.splice(existingNoteIndex, 1, updatedNote)
        }
        // If there's no note for this date
        else {
          // Append a new one
          const newNote = { text, date }
          habit.notes.push(newNote)
        }
      }
    },
    deleteHabitNote(state: VuexState, payload: { habitId: string, date: DateFormat }) {
      const { habitId, date } = payload;
      const habit = state.habits.find((habit: Habit) => habit.id === habitId);
      if (habit) {
        const existingNoteIndex = habit.notes.findIndex((habitNote: HabitNote) => compareDateFormats(habitNote.date, date));
        if (existingNoteIndex > -1) {
          habit.notes.splice(existingNoteIndex, 1);
        }
      }
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
});
