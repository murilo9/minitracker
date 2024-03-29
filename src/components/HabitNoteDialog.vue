<template>
  <v-dialog v-model="show" width="300" persistent>
    <v-card color="#9BCFD1">
      <v-card-title class="text-h5 lighten-2">
        {{ noteLabel }}
      </v-card-title>
      
      <template v-if="showDeleteHabitConfirmationMessage">
        <v-card-text>
          Are you sure you want to clear notes for this date? That cannot be undone.
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn text @click="showDeleteHabitConfirmationMessage = false">Cancel</v-btn>
          <v-btn color="error" text @click="deleteNote"> Clear Notes </v-btn>
        </v-card-actions>
      </template>

      <template v-else>
        <v-card-text>
          <v-textarea placeholder="Add notes" v-model="noteInput"></v-textarea>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn text @click="closeModal"> Cancel </v-btn>
          <v-btn color="error" text @click="showDeleteHabitConfirmationMessage = true" v-if="noteExists"> Clear </v-btn>
          <v-btn color="primary" text @click="saveNote"> Save </v-btn>
        </v-card-actions>
      </template>
    </v-card>

  </v-dialog>
</template>

<script lang="ts">
import monthName from "@/utils/monthName";
import getHabitNoteByDateFormat from "@/utils/getHabitNoteByDateFormat";
import Vue from "vue";
import Habit from "@/types/Habit";
import DateFormat from "@/types/DateFormat";
export default Vue.extend({
  props: {
    show: Boolean as () => boolean,
    habitName: String as () => string,
    habitId: String as () => string,
    habitDate: Array as () => DateFormat
  },
  computed: {
    noteLabel() {
      const monthNumber = this.habitDate[1];
      const day = this.habitDate[2];
      const month = monthName(monthNumber).substring(0, 3);
      return `${month} ${day} - ${this.habitName.toUpperCase()}`;
    },
  },
  data() {
    return {
      noteInput: "",
      noteExists: false,
      showDeleteHabitConfirmationMessage: false
    };
  },
  methods: {
    loadExistingNote() {
      const habit = this.$store.state.habits.find(
        (habit: Habit) => habit.id === this.habitId
      );
      if (habit) {
        const habitNote = getHabitNoteByDateFormat(habit, this.habitDate);
        this.$data.noteInput = habitNote?.text;
        this.noteExists = !!habitNote;
      }
    },
    saveNote() {
      const habitId = this.habitId;
      const date = this.habitDate;
      const text = this.$data.noteInput;
      this.$store.commit("saveHabitNote", { habitId, date, text });
      this.closeModal();
    },
    closeModal() {
      this.$data.noteInput = '';
      this.$data.showDeleteHabitConfirmationMessage = false;
      this.$emit('close');
    },
    deleteNote(){
      const habitId = this.habitId;
      const date = this.habitDate;
      this.$store.commit("deleteHabitNote", { habitId, date });
      this.closeModal();
    }
  },
  watch: {
    show(val: boolean) {
      if (val) {
        this.loadExistingNote();
      }
    },
  },
});
</script>

<style>
</style>