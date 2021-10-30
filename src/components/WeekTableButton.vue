<template>
  <v-btn
    text
    icon
    :disabled="!isPast"
    :class="{ today: isToday, 'date-item': true }"
    @click="toggleStatus"
  >
    <CompletedIcon v-if="habitStatus === 'DONE'" />
    <FailedIcon v-else-if="habitStatus === 'FAILED'" />
    <SkippedIcon v-else-if="habitStatus === 'SKIPPED'" />
    <template v-else>
      <template v-if="isToday || !isPast">
        {{ date[2] }}
      </template>
      <template v-else>
        <FailedIcon v-if="weekDayRepeat(weekDay)" />
        <SkippedIcon v-else />
      </template>
    </template>
  </v-btn>
</template>

<script lang="ts">
import Vue from "vue";
import CompletedIcon from "@/components/CompletedIcon.vue";
import FailedIcon from "@/components/FailedIcon.vue";
import SkippedIcon from "@/components/SkippedIcon.vue";
import Habit from "@/types/Habit";
import DateFormat from "@/types/DateFormat";
import getDateFormat from "@/utils/getDateFormat";
import compareDateFormats from "@/utils/compareDateFormats";
import getHabitAcomplishmentByDateFormat from "@/utils/getHabitAcomplishmentByDateFormat";
export default Vue.extend({
  components: {
    CompletedIcon,
    FailedIcon,
    SkippedIcon,
  },
  props: {
    habit: Object as () => Habit,
    date: Array as () => DateFormat,
    isPast: Boolean as () => boolean,
  },
  methods: {
    toggleStatus() {
      const date = this.$props.date;
      this.$store.commit("toggleHabitStatus", {
        habitId: this.$props.habit.id,
        date: date,
      });
      this.$forceUpdate();
    },
    weekDayIsPast(weekDay: number): boolean {
      const todayWeekDay = new Date().getDay();
      return todayWeekDay >= weekDay;
    },
    weekDayRepeat(weekDay: number): boolean {
      return this.habit.repeatsOn[weekDay];
    },
  },
  computed: {
    isToday() {
      return compareDateFormats(this.date, getDateFormat(new Date()));
    },
    habitStatus() {
      const date = this.date as DateFormat;
      const habit = this.habit as Habit;
      const habitAcomplishment = getHabitAcomplishmentByDateFormat(date, habit);
      return habitAcomplishment?.status;
    },
    weekDay() {
      const today = new Date();
      // Date's month, day and year must be set this way to avoid timezone issues
      today.setDate(this.date[2]);
      today.setMonth(this.date[1] - 1);
      today.setFullYear(this.date[0]);
      return today.getDay();
    },
  },
});
</script>

<style>
</style>