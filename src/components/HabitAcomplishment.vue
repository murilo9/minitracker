<template>
  <div class="text-center mt-5">
    <h2>
      <v-icon class="text-h4 acomplishment-icon">
        mdi-medal
      </v-icon>
    </h2>
    <p class="text-h6">
      {{success}}/{{total}}
    </p>
  </div>
</template>

<script lang="ts">
import Habit from '@/types/Habit'
import getHabitSuccessTotalByMonth from '@/utils/getHabitSuccessTotalByMonth'
import Vue from 'vue'
export default Vue.extend({
  props: {
    habit: Object as () => Habit,
    month: Number as () => number
  },
  computed: {
    success(){
      return getHabitSuccessTotalByMonth(this.month, this.habit)
    },
    total(){
      const monthDate = new Date()
      monthDate.setMonth(this.month as number)
      monthDate.setDate(0)
      const totalDaysInMonth = monthDate.getDate()
      return totalDaysInMonth
    }
  }
})
</script>

<style>
.acomplishment-icon {
  color: inherit !important;
}
</style>