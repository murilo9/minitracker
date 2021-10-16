<template>
  <v-app>
    <v-app-bar app elevation="0" class="mx-3" prominent>
      <div>TODAY</div>
      <div>WED</div>
      <div>OCT 4</div>
    </v-app-bar>

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

<style lang="scss">
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
/* Applies font-family */
.v-application {
  font-family: "Fira Sans", "Roboto", sans-serif !important;
}

/* Applies flex col to app bar */
.v-toolbar__content {
  flex-direction: column;
  align-items: center !important;
}

/* Applies background and font colors */
.theme--light.v-application {
  color: $fontColor !important;
}

/* Applies top bar transparency*/
.theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: transparent !important;
  border-bottom: 1px solid $borderColor;
}
</style>