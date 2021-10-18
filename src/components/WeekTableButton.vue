<template>
  <span
    class="item text-center d-inline-block"
    :class="{ today: isToday }"
    @click="toggleStatus"
  >
    <CompletedIcon v-if="habitStatus === 'DONE'" />
    <FailedIcon v-else-if="habitStatus === 'FAILED'" />
    <SkippedIcon v-else-if="habitStatus === 'SKIPPED'" />
    <template v-else>
      <template v-if="isToday">
        {{ date[2] }}
      </template>
      <FailedIcon v-else />
    </template>
  </span>
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
import getHabitDataByDateFormat from "@/utils/getHabitDataByDateFormat";
export default Vue.extend({
  components: {
    CompletedIcon,
    FailedIcon,
    SkippedIcon,
  },
  props: {
    habit: Object as () => Habit,
    date: Array as () => DateFormat,
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
  },
  computed: {
    isToday() {
      return compareDateFormats(this.date, getDateFormat(new Date()));
    },
    habitStatus() {
      const date = this.date as DateFormat;
      const habit = this.habit as Habit;
      const habitData = getHabitDataByDateFormat(date, habit);
      return habitData?.status;
    },
  },
});
</script>

<style>
</style>