<template>
  <v-app>
    <MobileTopBar />
    <DesktopTopBar />

    <v-main>
      <v-container>
        <ul class="mt-3">
          <li v-for="habit in habits" :key="habit.id">
            {{ habit.name.toUpperCase() }}
          </li>
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
// @ is an alias to /src
import Vue from "vue";
import MobileTopBar from "../components/MobileTopBar.vue";
import DesktopTopBar from "../components/DesktopTopBar.vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: "Home",
  components: {
    MobileTopBar,
    DesktopTopBar,
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
  },
});
</script>
