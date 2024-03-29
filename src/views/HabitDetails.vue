<template>
  <v-app v-if="!loading">
    <!-- If there's no habit -->
    <v-container v-if="!habit" class="text-center fill-height justify-center">
      <div>
        <h1 class="text-h4 mb-8">Oops...</h1>
        <h2 class="text-subtitle-1">
          It looks like this habit does not exist :c
        </h2>
      </div>
    </v-container>

    <!-- If the habit exists -->
    <v-main v-else class="pt-0 px-8">
      <h1 class="mb-2 mt-7 habit-title">{{ habit.name.toUpperCase() }}</h1>
      <v-divider></v-divider>

      <!-- Mobile swap buttons -->
      <v-container
        fluid
        class="
          d-flex
          justify-space-between justify-sm-center
          align-center
          pa-0
          mt-5
        "
      >
        <v-btn
          icon
          text
          class="mtk-prev-button d-block d-sm-none"
          @click="prevMonth"
        >
          <v-icon>mdi-chevron-up</v-icon>
        </v-btn>
        <span class="text-body-2 text-center">
          {{ selectedMonthName }} - {{ selectedYear }}
        </span>
        <v-btn
          icon
          text
          class="mtk-next-button d-block d-sm-none"
          @click="nextMonth"
        >
          <v-icon>mdi-chevron-up</v-icon>
        </v-btn>
      </v-container>
      <v-container fluid class="d-flex justify-center align-center">
        <v-btn
          icon
          text
          class="mtk-prev-button d-none d-sm-block"
          @click="prevMonth"
        >
          <v-icon>mdi-chevron-up</v-icon>
        </v-btn>
        <MonthTable
          :habit="habit"
          :month="selectedMonth"
          :year="selectedYear"
          class="mt-4 mx-0 mx-sm-4"
        />
        <v-btn
          icon
          text
          class="mtk-next-button d-none d-sm-block"
          @click="nextMonth"
        >
          <v-icon>mdi-chevron-up</v-icon>
        </v-btn>
      </v-container>
      <v-divider></v-divider>
      <HabitAcomplishment
        :month="selectedMonth"
        :year="selectedYear"
        :habit="habit"
      />
    </v-main>
    <v-divider></v-divider>
    <v-footer>
      <v-row v-if="habit">
        <v-col>
          <v-btn text color="secondary" block @click="handleBackClick">
            Back
          </v-btn>
        </v-col>
        <v-col>
          <v-btn text color="error" block @click="showDeleteHabitDialog = true">
            Delete
          </v-btn>
        </v-col>
      </v-row>
      <v-btn v-else color="secondary" text block @click="handleBackClick">
        Go Back
      </v-btn>
    </v-footer>

    <!-- Delete habit dialog -->
    <v-dialog v-model="showDeleteHabitDialog" v-if="habit">
      <v-card color="#9BCFD1">
        <v-card-title class="text-h5 lighten-2">
          {{ habit.name }}
        </v-card-title>

        <v-card-text>
          Are you sure you want to <b>delete</b> this habit? This action can't
          be undone.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="showDeleteHabitDialog = false">
            Cancel
          </v-btn>
          <v-btn color="error" text @click="handleDeleteClick"> Delete </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
  <div v-else></div>
</template>

<script lang="ts">
import Vue from "vue";
import MonthTable from "@/components/MonthTable.vue";
import HabitAcomplishment from "@/components/HabitAcomplishment.vue";
import { mapState } from "vuex";
import Habit from "@/types/Habit";
import monthName from "@/utils/monthName";
export default Vue.extend({
  components: {
    MonthTable,
    HabitAcomplishment,
  },
  data() {
    return {
      loading: true,
      habit: null,
      showDeleteHabitDialog: false,
      selectedMonth: new Date().getMonth(),
      selectedYear: new Date().getFullYear(),
    };
  },
  computed: {
    ...mapState({
      habits: "habits",
    }),
    selectedMonthName() {
      return monthName(this.$data.selectedMonth as number)
        .toUpperCase()
        .substring(0, 3);
    },
  },
  mounted() {
    const habitId = this.$route.params.habitId;
    const habit = this.habits.find((habit: Habit) => habit.id === habitId);
    if (habit) {
      this.$data.habit = habit;
    }
    this.$data.loading = false;
  },
  methods: {
    handleBackClick(): void {
      this.$router.push("/");
    },
    handleDeleteClick() {
      this.$store.commit("deleteHabit", this.$data.habit.id);
      this.$router.push("/");
    },
    prevMonth() {
      this.$data.selectedMonth -= 1;
      if (this.$data.selectedMonth < 0) {
        this.$data.selectedMonth = 11;
        this.$data.selectedYear -= 1;
      }
    },
    nextMonth() {
      this.$data.selectedMonth += 1;
      if (this.$data.selectedMonth > 11) {
        this.$data.selectedMonth = 0;
        this.$data.selectedYear += 1;
      }
    },
  },
});
</script>

<style>
.habit-title {
  font-size: 27px;
  font-weight: 400;
}
.v-toolbar__content {
  padding-left: 0;
  padding-right: 0;
}
.mtk-next-button .v-icon {
  transform: rotate(90deg);
}
.mtk-prev-button .v-icon {
  transform: rotate(270deg);
}
</style>