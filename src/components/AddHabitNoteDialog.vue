<template>
  <v-dialog v-model="showAddHabitNoteDialog" width="300">
    <v-card color="#9BCFD1">
      <v-card-title class="text-h5 lighten-2">
        {{ habitName }}
      </v-card-title>

      <v-textarea></v-textarea>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="seconday" text @click="showAddHabitNoteDialog = false">
          Cancel
        </v-btn>
        <v-btn color="primary" text @click="() => {}"> Add </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
export default Vue.extend({
  computed: {
    ...mapState({
      habitName: "addDetailForHabitName",
      habitId: "addDetailForHabitId",
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
  },
  methods: {
    handleAddClick() {
      //
    },
    handleBackClick() {
      //
    },
  },
});
</script>

<style>
</style>