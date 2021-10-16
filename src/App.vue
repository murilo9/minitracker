<template>
  <v-app>
    <v-app-bar app elevation="0" class="mx-3"> Top Bar </v-app-bar>

    <v-main>
      <v-container>CONTAINER</v-container>
    </v-main>
    <v-footer>Footer</v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  components: {},

  data: () => ({
    //
  }),
});
</script>

<style>
@font-face {
  font-family: "Fira Sans";
  src: url("./assets/font/FiraSans/FiraSans-Regular.ttf") format("truetype");
}
@font-face {
  font-family: "Fira Sans";
  src: url("./assets/font/FiraSans/FiraSans-Bold.ttf") format("truetype");
  font-weight: bold;
}
@font-face {
  font-family: "Fira Sans";
  src: url("./assets/font/FiraSans/FiraSans-Medium.ttf") format("truetype");
  font-weight: 600;
}
@font-face {
  font-family: "Fira Sans";
  src: url("./assets/font/FiraSans/FiraSans-Light.ttf") format("truetype");
  font-weight: 200;
}
</style>