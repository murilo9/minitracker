<template>
  <v-app>
    <MobileTopBar />
    <DesktopTopBar />

    <v-main>
      <v-container class="mtk-list-container py-2">
        <ul class="mt-3 pl-0">
          <HabitItem v-for="habit in habits" :key="habit.id" :habit="habit" />
        </ul>
      </v-container>
    </v-main>
    <v-footer>
      <v-btn text block @click="openPage('add')">
        <v-icon> mdi-plus </v-icon>
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import MobileTopBar from "../components/MobileTopBar.vue";
import DesktopTopBar from "../components/DesktopTopBar.vue";
import HabitItem from "../components/HabitItem.vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: "Home",
  components: {
    MobileTopBar,
    DesktopTopBar,
    HabitItem,
  },
  computed: {
    ...mapState({
      habits: "habits",
    }),
  },
  methods: {
    openPage(page: string) {
      this.$router.push(page);
    },
    communicate() {
      console.log("sending message to sw", navigator.serviceWorker);
      navigator.serviceWorker.controller?.postMessage({
        type: "HABITS_UPDATED",
        payload: this.habits,
      });
    },
  },
});
</script>

<style scoped>
.mtk-habit-button {
  letter-spacing: unset;
  justify-content: flex-start;
  width: 65vw;
}
.mtk-list-container {
  height: 100%;
  overflow-x: auto;
}
</style>