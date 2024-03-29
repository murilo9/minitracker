<template>
  <div>
    <div class="d-flex justify-center">
      <v-btn
        text
        icon
        disabled
        class="date-item"
        v-for="(weekDay, w) in weekDays"
        :key="w"
      >
        <b>{{ weekDay }}</b>
      </v-btn>
    </div>
    <div class="d-flex justify-center" v-for="(week, w) in monthWeeks" :key="w">
      <v-btn
        text
        icon
        :class="{
          today: isToday(weekDay.data),
          'is-past': isPast(weekDay.data),
          'date-item': true,
        }"
        :outlined="isToday(weekDay.data)"
        :disabled="!(isPast(weekDay.data) || isToday(weekDay.data))"
        v-for="(weekDay, d) in week"
        :key="d"
        @click="handleDayClick(weekDay.data)"
      >
        <div :style="{ color: dayColor(weekDay.data) }">
          {{ weekDay.data }}
        </div>
        <div class="item-note d-flex align-center justify-center">
          <v-icon v-if="notesForDay(weekDay.data) && weekDay.data">
            mdi-circle-small
          </v-icon>
        </div>
      </v-btn>
    </div>
    <HabitNoteDialog
      @close="showAddHabitNoteDialog = false"
      :show="showAddHabitNoteDialog"
      :habitName="addDetailForHabitName"
      :habitId="addDetailForHabitId"
      :habitDate="addDetailForHabitDate"
    />
  </div>
</template>

<script lang="ts">
import Habit from "@/types/Habit";
import HabitStatus from "@/types/HabitStatus";
import getDateFormat from "@/utils/getDateFormat";
import getHabitAcomplishmentByDate from "@/utils/getHabitAcomplishmentByDate";
import getHabitNoteByDateFormat from "@/utils/getHabitNoteByDateFormat";
import HabitNoteDialog from "@/components/HabitNoteDialog.vue";
import Vue from "vue";
import DateFormat from "@/types/DateFormat";
export default Vue.extend({
  data() {
    return {
      clickTimeout: 0,
      addNoteMode: false,
      showAddHabitNoteDialog: false,
      addDetailForHabitName: "",
      addDetailForHabitId: "",
      addDetailForHabitDate: [] as DateFormat,
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
  components: {
    HabitNoteDialog,
  },
  props: {
    month: Number as () => number,
    year: Number as () => number,
    habit: Object as () => Habit,
  },
  methods: {
    resetMonthWeeks() {
      this.$data.monthWeeks = [
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}],
      ];
    },
    fillMonth() {
      // Reset monthWeeks data structure
      this.resetMonthWeeks();
      // Set base date for this month
      let baseDate = new Date(this.year, this.month, 1);
      baseDate.setHours(0, 0, 0, 0);
      let weekIndex = 0;
      let lastWeekDay = 0;
      // For each month week, fill its mont days
      do {
        const currentWeekDay = baseDate.getDay();
        // If reached saturday
        if (lastWeekDay === 6) {
          weekIndex++;
        }
        lastWeekDay = currentWeekDay;
        const currentMonthDay = baseDate.getDate();
        this.monthWeeks[weekIndex][currentWeekDay].data = currentMonthDay;
        // Set next month day
        baseDate = new Date(this.year, this.month, currentMonthDay + 1);
        baseDate.setHours(0, 0, 0, 0);
      } while (baseDate.getDate() > 1);
      this.$forceUpdate();
    },
    notesForDay(monthDay: number) {
      const dateFormat = [this.year, this.month, monthDay];
      return getHabitNoteByDateFormat(this.habit, dateFormat);
    },
    isToday(day: number) {
      const today = new Date();
      return (
        today.getDate() === day &&
        today.getMonth() === this.month &&
        today.getFullYear() === this.year
      );
    },
    isPast(day: number): boolean {
      const today = new Date();
      const currentDay = today.getDate();
      const currentYear = today.getFullYear();
      const currentMonth = today.getMonth();
      const currentDateNumberStr = Number(
        `${currentYear}${currentMonth > 9 ? currentMonth : "0" + currentMonth}${
          currentDay > 9 ? currentDay : "0" + currentDay
        }`
      );
      const referenceDateNumberStr = Number(
        `${this.year}${this.month > 9 ? this.month : "0" + this.month}${
          day > 9 ? day : "0" + day
        }`
      );
      return currentDateNumberStr > referenceDateNumberStr;
    },
    handleDayClick(monthDay: number) {
      if (this.addNoteMode) {
        clearTimeout(this.clickTimeout);
        this.addNoteMode = false;
        const date = [this.year, this.month, monthDay];
        this.showAddHabitNoteDialog = true;
        this.addDetailForHabitName = this.habit.name;
        this.addDetailForHabitId = this.habit.id;
        this.addDetailForHabitDate = date;
      } else {
        this.clickTimeout = setTimeout(() => this.toggle(monthDay), 200);
        this.addNoteMode = true;
      }
    },
    toggle(monthDay: number) {
      this.$data.addNoteMode = false;
      const { month, year } = this.$props;
      const date = new Date(year, month, monthDay);
      date.setHours(0, 0, 0, 0);
      const dateFormatted = getDateFormat(date);
      this.$store.commit("toggleHabitStatus", {
        habitId: this.habit.id,
        date: dateFormatted,
      });
      this.$forceUpdate();
    },
    dayColor(monthDay: number): string {
      const colors = {
        failed: "#9c1d1d",
        done: "#35c732",
        skipped: "#61acae",
      };
      const { month, year } = this.$props;
      let date = new Date(year, month, monthDay);
      date.setHours(0, 0, 0, 0);
      // Get habit acomplishments and status
      const habitAcomplishment = getHabitAcomplishmentByDate(date, this.habit);
      const dayStatus = habitAcomplishment?.status;
      const isPast = this.isPast(monthDay);
      const weekDay = date.getDay();
      const weekDayRepeat = this.habit.repeatsOn[weekDay];
      // Get color
      switch (dayStatus) {
        case HabitStatus.FAILED:
          return colors.failed;
        case HabitStatus.DONE:
          return colors.done;
        case HabitStatus.SKIPPED:
          return colors.skipped;
        default:
          return isPast
            ? weekDayRepeat
              ? colors.failed
              : colors.skipped
            : "unset";
      }
    },
  },
  mounted() {
    this.fillMonth();
  },
  watch: {
    showAddHabitNoteDialog() {
      this.$forceUpdate();
    },
    month() {
      this.fillMonth();
    },
    year() {
      this.fillMonth();
    },
  },
});
</script>

<style lang="scss" scoped>
.mtk-title-row {
  font-weight: 800;
}
.item {
  width: 28px;
  height: 28px;
  font-size: 16px;
  margin: 4px;
  position: relative;
  border-radius: 50%;
  &.is-past,
  &.today {
    transition: 0.2s all;
    &:active {
      transform: scale(0.98);
      background: rgba(0, 0, 0, 0.24);
    }
  }
}

.item.today {
  border: 1px solid;
  border-radius: 50%;
}
.item-note {
  height: 6px !important;
  width: 100%;
  position: absolute;
  bottom: -6px;
}
.item-note .v-icon {
  font-size: 20px;
}
</style>