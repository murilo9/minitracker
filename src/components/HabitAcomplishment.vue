<template>
  <div class="text-center mt-5">
    <h2>
      <v-icon class="text-h4 acomplishment-icon"> mdi-medal </v-icon>
    </h2>
    <p class="text-h6">{{ success }}/{{ total }}</p>
  </div>
</template>

<script lang="ts">
import Habit from "@/types/Habit";
import getHabitSuccessTotalByYearMonth from "@/utils/getHabitSuccessTotalByYearMonth";
import Vue from "vue";
export default Vue.extend({
  props: {
    habit: Object as () => Habit,
    month: Number as () => number,
    year: Number as () => number,
  },
  computed: {
    success() {
      return getHabitSuccessTotalByYearMonth(this.month, this.year, this.habit);
    },
    total() {
      const monthDate = new Date();
      monthDate.setMonth(this.month as number);
      monthDate.setDate(0);
      const totalDaysInMonth = monthDate.getDate();
      let total = 0;
      for (let day = 0; day <= totalDaysInMonth; day++) {
        monthDate.setDate(day);
        const weekDay = monthDate.getDay();
        const dayCounts = (this.habit as Habit).repeatsOn[weekDay];
        if (dayCounts) {
          total++;
        }
      }
      return total;
    },
  },
});
</script>

<style>
.acomplishment-icon {
  color: inherit !important;
}
</style>