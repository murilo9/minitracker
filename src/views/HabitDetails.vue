<template>
  <v-app v-if="!loading">
    <v-container v-if="!habit" class="text-center fill-height justify-center">
      <div>
        <h1 class="text-h4 mb-8">Oops...</h1>
        <h2 class="text-subtitle-1">
          It looks like this habit does not exist :c
        </h2>
      </div>
    </v-container>
    <v-main v-else class="pt-0 px-8">
      <h1 class="mb-2 mt-7 habit-title">{{ habit.name.toUpperCase() }}</h1>
      <v-divider></v-divider>
      <h2 class="text-body-2 text-center mt-5">{{ currentMonthName }}</h2>
      <MonthTable
        :habit="habit"
        :month="currentMonth"
        :year="currentYear"
        class="my-4"
      />
      <v-divider></v-divider>
    </v-main>
    <v-divider></v-divider>
    <v-footer>
      <v-row v-if="habit">
        <v-col>
          <v-btn text color="secondary" block @click="handleBackClick">
            Back
          </v-btn>
        </v-col>
        <v-col>
          <v-btn text color="error" block @click="showDeleteHabitDialog = true">
            Delete
          </v-btn>
        </v-col>
      </v-row>
      <v-btn v-else color="secondary" text block @click="handleBackClick">
        Go Back
      </v-btn>
    </v-footer>
    <v-dialog v-model="showDeleteHabitDialog" v-if="habit">
      <v-card color="#9BCFD1">
        <v-card-title class="text-h5 lighten-2">
          {{ habit.name }}
        </v-card-title>

        <v-card-text>
          Are you sure you want to <b>delete</b> this habit? This action can't
          be undone.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="showDeleteHabitDialog = false">
            Cancel
          </v-btn>
          <v-btn color="error" text @click="showDeleteHabitDialog = false">
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
  <div v-else></div>
</template>

<script lang="ts">
import Vue from "vue";
import MonthTable from "@/components/MonthTable.vue";
import { mapState } from "vuex";
import Habit from "@/types/Habit";
import monthName from "@/utils/monthName";
export default Vue.extend({
  components: {
    MonthTable,
  },
  data() {
    return {
      loading: true,
      habit: null,
      showDeleteHabitDialog: false,
    };
  },
  computed: {
    ...mapState({
      habits: "habits",
    }),
    currentMonth(): number {
      return new Date().getMonth();
    },
    currentMonthName() {
      return monthName(this.currentMonth as number).toUpperCase();
    },
    currentYear() {
      return new Date().getFullYear();
    },
  },
  mounted() {
    const habitId = this.$route.params.habitId;
    const habit = this.habits.find((habit: Habit) => habit.id === habitId);
    if (habit) {
      this.habit = habit;
    }
    this.loading = false;
  },
  methods: {
    handleBackClick(): void {
      this.$router.push("/");
    },
  },
});
</script>

<style>
.habit-title {
  font-size: 27px;
  font-weight: 400;
}
.v-toolbar__content {
  padding-left: 0;
  padding-right: 0;
}
</style>