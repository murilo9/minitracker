<template>
  <div class="mtk-month-table">
    <div class="mtk-title-row d-flex justify-center">
      <span
        class="item text-center d-inline-block"
        v-for="(weekDay, w) in weekDays"
        :key="w"
        >{{ weekDay }}</span
      >
    </div>
    <div
      class="mtk-data-row d-flex justify-center"
      v-for="(week, w) in monthWeeks"
      :key="w"
    >
      <span
        class="item text-center d-inline-block"
        v-for="(weekDay, d) in week"
        :key="d"
      >
        {{ weekDay.data }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
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
  },
  mounted() {
    this.fillMonth();
  },
});
</script>

<style>
.mtk-title-row {
  font-weight: 600;
}
.item {
  width: 32px;
}
</style>