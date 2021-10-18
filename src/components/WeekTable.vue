<template>
  <div class="mtk-week-table">
    <div class="mtk-title-row text-center">
      <span
        class="item text-center d-inline-block"
        v-for="(weekDay, w) in weekDays"
        :key="w"
        >{{ weekDay.name }}</span
      >
    </div>
    <div class="mtk-data-row d-flex justify-center align-center mt-1">
      <template v-for="(weekDay, w) in weekDays">
        <WeekTableButton :key="w" v-if="weekDayIsPast(w)" :habit="habit" :date="[currentYear, currentMonth, weekDay.label]"/>
        <span v-else :key="w" class="item text-center d-inline-block">
          {{weekDay.label}}
        </span>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Habit from "@/types/Habit";
import WeekTableButton from '@/components/WeekTableButton.vue';
import getHabitDataByDate from "@/utils/getHabitDataByDate";

import Vue from "vue";
export default Vue.extend({
  components: {
    WeekTableButton
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
    habit: Object as () => Habit
  },
  computed: {
    currentMonth(){
      return new Date().getMonth() + 1;
    },
    currentYear(){
      return new Date().getFullYear();
    }
  },
  methods: {
    weekDayIsPast(weekDay: number): boolean {
      const todayWeekDay = new Date().getDay();
      return todayWeekDay >= weekDay
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
.mtk-title-row {
  font-weight: 600;
}
.item {
  width: 32px;
}
</style>