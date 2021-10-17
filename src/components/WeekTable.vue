<template>
  <div class="mtk-week-table">
    <div class="mtk-title-row d-flex justify-center">
      <span
        class="item text-center d-inline-block"
        v-for="(weekDay, w) in weekDays"
        :key="w"
        >{{ weekDay.name }}</span
      >
    </div>
    <div class="mtk-data-row d-flex justify-center mt-1">
      <span
        class="item text-center d-inline-block"
        v-for="(weekDay, w) in weekDays"
        :key="w"
      >
        {{ weekDay.label }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
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

<style lang="scss">
.mtk-title-row {
  font-weight: 600;
}
.item {
  width: 32px;
}
</style>