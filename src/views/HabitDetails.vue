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
    <v-main v-else>
      {{ habit }}
      <MonthTable :month="currentMonth" :year="currentYear" />
    </v-main>
    <v-footer>
      <v-row v-if="habit">
        <v-col>
          <v-btn text color="secondary" block @click="handleBackClick">
            Back
          </v-btn>
        </v-col>
        <v-col>
          <v-btn text color="error" block @click="handleDeleteClick">
            Delete
          </v-btn>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col>
          <v-btn
            color="secondary"
            text
            block
            @click="handleBackClick"
            class="mt-4"
          >
            Go Back
          </v-btn>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
  <div v-else></div>
</template>

<script lang="ts">
import Vue from "vue";
import MonthTable from "@/components/MonthTable.vue";
import { mapState } from "vuex";
import Habit from "@/types/Habit";
export default Vue.extend({
  components: {
    MonthTable,
  },
  data() {
    return {
      loading: true,
      habit: null,
    };
  },
  computed: {
    ...mapState({
      habits: "habits",
    }),
    currentMonth() {
      return new Date().getMonth();
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
    handleDeleteClick(): void {
      //
    },
  },
});
</script>

<style>
</style>