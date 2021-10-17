<template>
  <v-app>
    <MobileTopBar />
    <DesktopTopBar />

    <v-main>
      <v-container>CONTAINER</v-container>
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

export default Vue.extend({
  name: "Home",
  components: {
    MobileTopBar,
    DesktopTopBar,
  },
  methods: {
    openPage(page: string) {
      this.$router.push(page);
    },
  },
});
</script>
