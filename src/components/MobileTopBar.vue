<template>
  <v-app-bar app elevation="0" class="mx-3 d-md-none" height="160">
    <v-container
      fluid
      class="
        mx-sm-10
        d-flex
        align-center
        justify-space-between
        flex-column flex-sm-row
      "
    >
      <div class="text-h5 mb-3 mb-sm-0">TODAY</div>
      <div>
        <div class="body-1 text-center">{{ weekLabel }}</div>
        <div class="body-1">{{ monthLabel }}</div>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  computed: {
    weekLabel() {
      return new Date().toUTCString().split(",")[0].toUpperCase();
    },
    monthLabel() {
      return (
        new Date().toUTCString().split(" ")[2].toUpperCase() +
        " " +
        new Date().getDate()
      );
    },
  },
});
</script>

<style>
</style>