<template>
  <div id="app">
    <router-view />
  </div>
</template>

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

/* Applies background and font colors */
.theme--light.v-application {
  color: $fontColor !important;
}

/* Applies top bar transparency*/
.theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: transparent !important;
  border-bottom: 1px solid $borderColor;
}

/* Applies propper styling to body-1 text */
.v-application .body-1 {
  font-weight: 300 !important;
  line-height: 1.25rem !important;
}

/* Makes v-main height responsive between tablet-desktop */
@media screen and (max-width: 768px) {
  .v-main {
    padding-top: 160px !important;
  }
}
</style>
