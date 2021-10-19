<template>
  <li>
    <v-btn text icon @click="showDetails = !showDetails">
      <v-icon v-if="showDetails">mdi-menu-down</v-icon>
      <v-icon v-else>mdi-menu-right</v-icon>
    </v-btn>
    <v-btn text class="mtk-habit-button pl-2 pr-0" @click="openHabitDetails">
      {{ habit.name }}
    </v-btn>
    <v-btn
      text
      icon
      class="float-right today"
      @click="toggleStatus"
      v-show="!showDetails"
    >
      <CompletedIcon v-if="habitStatus === 'DONE'" />
      <FailedIcon v-else-if="habitStatus === 'FAILED'" />
      <SkippedIcon v-else />
    </v-btn>
    <v-expand-transition>
      <div class="mtk-habit-details" v-show="showDetails">
        <WeekTable :habit="habit" />
      </div>
    </v-expand-transition>
  </li>
</template>

<script lang="ts">
import Habit from "@/types/Habit";
import CompletedIcon from "@/components/CompletedIcon.vue";
import FailedIcon from "@/components/FailedIcon.vue";
import SkippedIcon from "@/components/SkippedIcon.vue";
import WeekTable from "@/components/WeekTable.vue";
import getHabitDataByDate from "@/utils/getHabitDataByDate";
import Vue from "vue";
import getDateFormat from "@/utils/getDateFormat";
export default Vue.extend({
  components: {
    CompletedIcon,
    FailedIcon,
    SkippedIcon,
    WeekTable,
  },
  computed: {
    habitStatus() {
      const today = new Date();
      const habitData = getHabitDataByDate(today, this.habit);
      return habitData?.status;
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
  methods: {
    toggleStatus() {
      this.$store.commit("toggleHabitStatus", {
        habitId: this.habit.id,
        date: getDateFormat(new Date()),
      });
    },
    openHabitDetails() {
      this.$router.push(`/details/${this.habit.id}`);
    },
  },
});
</script>

<style>
</style>