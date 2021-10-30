<template>
  <v-app>
    <v-main>
      <v-container>
        <div class="text-h4 text-center my-12">ADD HABIT</div>
        <v-text-field
          id="add-habit-name-input"
          placeholder="Name"
          v-model="habitForm.name"
          @keyup.enter="handleAddClick"
          :error-messages="errorMessage"
        ></v-text-field>
        <p class="text--secondary">Repeats on:</p>
        <v-container fluid class="py-0 justify-center">
          <v-btn
            class="ml-2"
            v-for="(i, index) in 7"
            :key="index"
            :outlined="habitForm.repeatsOn[index]"
            :color="habitForm.repeatsOn[index] ? 'primary' : 'secondary'"
            small
            icon
            @click="toggleRepeatsOn(index)"
          >
            {{ weekLetter[index] }}
          </v-btn>
        </v-container>
      </v-container>
    </v-main>
    <v-footer>
      <v-row>
        <v-col>
          <v-btn text color="secondary" block @click="handleBackClick">
            Discard
          </v-btn>
        </v-col>
        <v-col>
          <v-btn text color="primary" block @click="handleAddClick">
            Add
          </v-btn>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AddHabit",
  data() {
    return {
      weekLetter: ["S", "M", "T", "W", "T", "F", "S"],
      habitForm: {
        id: `_${new Date().getTime() + Math.floor(Math.random() * 10000)}`,
        name: "",
        acomplishments: [],
        notes: [],
        repeatsOn: [false, true, true, true, true, true, false],
      },
      errorMessage: "",
    };
  },
  mounted() {
    document.getElementById("add-habit-name-input")?.focus();
  },
  methods: {
    handleBackClick(): void {
      this.$router.push("/");
    },
    handleAddClick(): void {
      const habitLength = this.habitForm.name.length;
      if (habitLength === 0) {
        this.errorMessage = "Habit name can't be empty";
      } else if (habitLength > 50) {
        this.errorMessage = "Habit name can't be more than 50 characters long";
      } else {
        this.$store.commit("addHabit", { ...this.habitForm });
        this.$router.push("/");
      }
    },
    toggleRepeatsOn(index: number) {
      this.habitForm.repeatsOn[index] = !this.habitForm.repeatsOn[index];
      this.$forceUpdate();
    },
  },
});
</script>

<style scoped>
.v-main {
  padding-top: 0 !important;
}
</style>