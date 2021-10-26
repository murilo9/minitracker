<template>
  <v-dialog v-model="showAddHabitNoteDialog" width="300" persistent>
    <v-card color="#9BCFD1">
      <v-card-title class="text-h5 lighten-2">
        {{ noteLabel }}
      </v-card-title>

      <v-card-text>
        <v-textarea placeholder="Add notes" v-model="noteInput"></v-textarea>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="seconday" text @click="closeModal"> Cancel </v-btn>
        <v-btn color="primary" text @click="saveNote"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import monthName from "@/utils/monthName";
import getHabitNoteByDateFormat from "@/utils/getHabitNoteByDateFormat";
import Vue from "vue";
import { mapState } from "vuex";
import Habit from "@/types/Habit";
export default Vue.extend({
  computed: {
    ...mapState({
      habitName: "addDetailForHabitName",
      habitId: "addDetailForHabitId",
      noteDate: "addDetailForHabitDate",
    }),
    showAddHabitNoteDialog: {
      get() {
        return this.$store.state.showAddHabitNoteDialog;
      },
      set(val: boolean) {
        if (val === false) {
          this.$store.commit("closeAddHabitNoteDialog", val);
        }
      },
    },
    noteLabel() {
      const monthNumber = this.noteDate[1];
      const day = this.noteDate[2];
      const month = monthName(monthNumber).substring(0, 3);
      return `${month} ${day} - ${this.habitName.toUpperCase()}`;
    },
  },
  data() {
    return {
      noteInput: "",
    };
  },
  methods: {
    loadExistingNote() {
      const habit = this.$store.state.habits.find(
        (habit: Habit) => habit.id === this.habitId
      );
      if (habit) {
        const habitNote = getHabitNoteByDateFormat(habit, this.noteDate);
        this.$data.noteInput = habitNote?.text;
      }
    },
    saveNote() {
      const habitId = this.habitId;
      const date = this.noteDate;
      const text = this.$data.noteInput;
      this.$store.commit("saveHabitNote", { habitId, date, text });
      this.closeModal();
    },
    closeModal() {
      this.showAddHabitNoteDialog = false;
      this.$data.noteInput = "";
    },
  },
  watch: {
    showAddHabitNoteDialog(open: boolean) {
      if (open) {
        this.loadExistingNote();
      }
    },
  },
});
</script>

<style>
</style>