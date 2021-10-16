<template>
  <v-app>
    <MobileTopBar />
    <DesktopTopBar />

    <v-main>
      <v-container>CONTAINER</v-container>
    </v-main>
    <v-footer>Footer</v-footer>
  </v-app>
</template>

<script>
// @ is an alias to /src
import MobileTopBar from "../components/MobileTopBar.vue";
import DesktopTopBar from "../components/DesktopTopBar.vue";

export default {
  name: "Home",
  components: {
    MobileTopBar,
    DesktopTopBar,
  },
};
</script>
