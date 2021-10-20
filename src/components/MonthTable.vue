<template>
  <div class="mtk-month-table">
    <div class="mtk-title-row d-flex justify-center">
      <div
        class="item d-inline-flex align-center justify-center"
        v-for="(weekDay, w) in weekDays"
        :key="w"
      >
        {{ weekDay }}
      </div>
    </div>
    <div
      class="mtk-data-row d-flex justify-center"
      v-for="(week, w) in monthWeeks"
      :key="w"
    >
      <div
        class="item d-inline-flex flex-column align-center justify-center"
        :class="{ today: isToday(weekDay.data) }"
        v-for="(weekDay, d) in week"
        :key="d"
        @click="toggle(weekDay.data)"
      >
        <div
          :style="{ color: dayColor(weekDay.data) }"
          :class="{ 'is-past': isPast(weekDay.data) }"
        >
          {{ weekDay.data }}
        </div>
        <div class="item-note d-flex align-center justify-center">
          <v-icon v-if="notesForDay(weekDay.data) && weekDay.data">
            mdi-circle-small
          </v-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Habit from "@/types/Habit";
import HabitStatus from "@/types/HabitStatus";
import getDateFormat from "@/utils/getDateFormat";
import getHabitDataByDate from "@/utils/getHabitDataByDate";
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      weekDays: ["S", "M", "T", "W", "T", "F", "S"],
      monthWeeks: [
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}],
      ] as Array<Array<{ data: number }>>,
    };
  },
  props: {
    month: Number as () => number,
    year: Number as () => number,
    habit: Object as () => Habit,
  },
  methods: {
    fillMonth() {
      // Set base date for this month
      const baseDate = new Date();
      baseDate.setFullYear(this.year);
      baseDate.setMonth(this.month);
      baseDate.setDate(1);
      let weekIndex = 0;
      let lastWeekDay = 0;
      do {
        const currentWeekDay = baseDate.getDay();
        if (lastWeekDay === 6) {
          weekIndex++;
        }
        lastWeekDay = currentWeekDay;
        const currentMonthDay = baseDate.getDate();
        this.monthWeeks[weekIndex][currentWeekDay].data = currentMonthDay;
        baseDate.setDate(currentMonthDay + 1);
      } while (baseDate.getDate() > 1);
      this.$forceUpdate();
    },
    notesForDay(day: number) {
      return false;
      // TODO: find and return habit notes for specified day
    },
    isToday(day: number) {
      const today = new Date();
      return today.getDate() === day;
    },
    isPast(day: number): boolean {
      return day < new Date().getDate();
    },
    toggle(monthDay: number) {
      const todayMonthDay = new Date().getDate();
      if (monthDay <= todayMonthDay) {
        const { month, year } = this.$props;
        const date = new Date();
        // Date's month, day and year must be set this way to avoid timezone issues
        date.setDate(monthDay);
        date.setMonth(month);
        date.setFullYear(year);
        const dateFormatted = getDateFormat(date);
        this.$store.commit("toggleHabitStatus", {
          habitId: this.habit.id,
          date: dateFormatted,
        });
        this.$forceUpdate();
      }
    },
    dayColor(monthDay: number): string {
      const colors = {
        failed: "#9c1d1d",
        done: "#35c732",
        skipped: "#61acae",
      };
      const { month, year } = this.$props;
      const date = new Date();
      // Date's month, day and year must be set this way to avoid timezone issues
      date.setDate(monthDay);
      date.setMonth(month);
      date.setFullYear(year);
      // Get habit data and status
      const habitData = getHabitDataByDate(date, this.habit);
      const dayStatus = habitData?.status;
      const todayDay = new Date().getDate();
      const isPast = monthDay < todayDay;
      // Get color
      switch (dayStatus) {
        case HabitStatus.FAILED:
          return colors.failed;
        case HabitStatus.DONE:
          return colors.done;
        case HabitStatus.SKIPPED:
          return colors.skipped;
        default:
          return isPast ? colors.failed : "unset";
      }
    },
  },
  mounted() {
    this.fillMonth();
  },
});
</script>

<style>
.mtk-title-row {
  font-weight: 800;
}
.item {
  width: 24px;
  height: 24px;
  font-size: 15px;
  margin: 6px;
  position: relative;
}

.item.today {
  border: 1px solid;
  border-radius: 50%;
}
.item-note {
  height: 6px !important;
  width: 100%;
  position: absolute;
  bottom: -10px;
}
.item-note .v-icon {
  font-size: 20px;
}
</style>