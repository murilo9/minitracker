<template>
  <div class="mtk-week-table">
    <div class="mtk-title-row text-center">
      <span
        class="item d-inline-flex justify-center align-center"
        :class="{ today: weekDayIsToday(w) }"
        v-for="(weekDay, w) in weekDays"
        :key="w"
        >{{ weekDay.name }}</span
      >
    </div>
    <div class="mtk-data-row d-flex justify-center align-center">
      <template v-for="(weekDay, w) in weekDays">
        <WeekTableButton
          :key="w"
          v-if="weekDayIsPast(w)"
          :habit="habit"
          :date="[currentYear, currentMonth, weekDay.label]"
        />
        <span
          v-else
          :key="w"
          class="item text-center d-inline-flex align-center justify-center"
        >
          {{ weekDay.label }}
        </span>
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
.mtk-title-row {
  font-weight: 600;
  .item.today {
    border: 1px solid;
  }
}
.item {
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 8px;
  transition: 0.2s all;
  &.is-past,
  &.today {
    &:active {
      transform: scale(0.98);
      background: rgba(0, 0, 0, 0.24);
    }
  }
}
</style>