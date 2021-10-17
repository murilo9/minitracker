<template>
  <li>
    <v-btn text icon>
      <v-icon>mdi-menu-right</v-icon>
    </v-btn>
    <v-btn text class="mtk-habit-button pl-2 pr-0">
      {{ habitData.name }}
    </v-btn>
  </li>
</template>

<script lang="ts">
import Habit from "@/types/Habit";
import Vue from "vue";
export default Vue.extend({
  props: {
    habitData: Object as () => Habit,
  },
});
</script>

<style>
</style>