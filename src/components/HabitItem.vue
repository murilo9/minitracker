<template>
  <li>
    <v-btn text icon @click="showDetails = !showDetails">
      <v-icon v-if="showDetails">mdi-menu-down</v-icon>
      <v-icon v-else>mdi-menu-right</v-icon>
    </v-btn>
    <v-btn text class="mtk-habit-button pl-2 pr-0">
      {{ habit.name }}
    </v-btn>
    <v-btn text icon>
      <CompletedIcon v-if="habitStatus === 'COMPLETED'" />
      <FailedIcon v-if="habitStatus === 'FAILED'" />
      <SkippedIcon v-if="habitStatus === 'SKIPPED' || !habitStatus" />
    </v-btn>
    <div class="mtk-habit-details" v-show="showDetails">DETAILS</div>
  </li>
</template>

<script lang="ts">
import Habit from "@/types/Habit";
import CompletedIcon from "@/components/CompletedIcon.vue";
import FailedIcon from "@/components/FailedIcon.vue";
import SkippedIcon from "@/components/SkippedIcon.vue";
import getHabitStatusByDate from "@/utils/getHabitStatusByDate";
import Vue from "vue";
export default Vue.extend({
  components: {
    CompletedIcon,
    FailedIcon,
    SkippedIcon,
  },
  computed: {
    habitStatus() {
      const today = new Date();
      const habitStatus = getHabitStatusByDate(today, this.habit);
      return habitStatus;
    },
  },
  data() {
    return {
      showDetails: false,
    };
  },
  props: {
    habit: Object as () => Habit,
  },
});
</script>

<style>
</style>