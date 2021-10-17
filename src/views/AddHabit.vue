<template>
  <v-app>
    <v-main> Add Habit </v-main>
    <v-footer>
      <v-container
        class="d-flex justify-space-between justify-sm-space-around pa-1"
      >
        <v-btn text color="secondary" @click="handleBackClick">Discard</v-btn>
        <v-btn text color="primary">Add</v-btn>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "AddHabit",
  methods: {
    handleBackClick() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>