<template>
  <div>
    <div class="d-flex justify-center align-center">
      <v-btn
        text
        icon
        class="date-item"
        :outlined="weekDayIsToday(w)"
        v-for="(weekDay, w) in weekDays"
        disabled
        :key="w"
      >
        {{ weekDay.name }}
      </v-btn>
    </div>
    <div class="mt-1 d-flex justify-center align-center">
      <template v-for="(weekDay, w) in weekDays">
        <WeekTableButton
          :key="w"
          :isPast="weekDayIsPast(w)"
          :class="{ 'is-past': weekDayIsPast(w) }"
          :habit="habit"
          :date="[currentYear, currentMonth, weekDay.label]"
        />
        <!--<span
          v-else
          :key="w"
          class="item text-center d-inline-flex align-center justify-center"
        >
          {{ weekDay.label }}
        </span>-->
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Habit from "@/types/Habit";
import WeekTableButton from "@/components/WeekTableButton.vue";

import Vue from "vue";
export default Vue.extend({
  components: {
    WeekTableButton,
  },
  data() {
    return {
      weekDays: [
        {
          name: "S",
          label: 0,
        },
        {
          name: "M",
          label: 0,
        },
        {
          name: "T",
          label: 0,
        },
        {
          name: "W",
          label: 0,
        },
        {
          name: "T",
          label: 0,
        },
        {
          name: "F",
          label: 0,
        },
        {
          name: "S",
          label: 0,
        },
      ],
    };
  },
  props: {
    habit: Object as () => Habit,
  },
  computed: {
    currentMonth() {
      return new Date().getMonth() + 1;
    },
    currentYear() {
      return new Date().getFullYear();
    },
  },
  methods: {
    weekDayIsPast(weekDay: number): boolean {
      const todayWeekDay = new Date().getDay();
      return todayWeekDay >= weekDay;
    },
    weekDayIsToday(weekDay: number): boolean {
      const todayWeekDay = new Date().getDay();
      return weekDay === todayWeekDay;
    },
  },
  mounted() {
    // Set today
    let today = new Date();
    const todayWeekDay = today.getDay();
    // Set first day of week
    let firstDayOfWeek = new Date();
    firstDayOfWeek.setDate(today.getDate() - todayWeekDay);
    // Fill weekDays labels
    this.weekDays.forEach((weekDay, index) => {
      const targetDate = new Date();
      targetDate.setDate(firstDayOfWeek.getDate() + index);
      this.weekDays[index].label = targetDate.getDate();
    });
  },
});
</script>

<style lang="scss" scoped>
</style>