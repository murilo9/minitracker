<template>
  <v-app>
    <v-main>
      <v-container>
        <div class="text-h4 text-center my-12">ADD HABIT</div>
        <v-text-field
          placeholder="Name"
          v-model="habitForm.name"
        ></v-text-field>
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
      habitForm: {
        id: `_${new Date().getTime() + Math.floor(Math.random() * 10000)}`,
        name: "",
        data: [],
        notes: [],
      },
    };
  },
  methods: {
    handleBackClick(): void {
      this.$router.push("/");
    },
    handleAddClick(): void {
      this.$store.commit("addHabit", { ...this.habitForm });
      this.$router.push("/");
    },
  },
});
</script>

<style scoped>
.v-main {
  padding-top: 0 !important;
}
</style>