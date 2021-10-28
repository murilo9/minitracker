<template>
  <div id="app">
    <router-view />
    
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
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

.v-main {
  max-height: calc(100vh - 48px);
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

/* Makes all footers transparent */
.v-sheet.v-footer {
  background-color: transparent !important;
}

/* ul reset */
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.date-item {
  /* Disabled v-btn for week day titles must have normal (not blured) font color */
  &.theme--light.v-btn.v-btn--disabled,
  &.theme--light.v-btn.v-btn--outlined.v-btn--text {
    color: inherit !important;
    border-color: inherit !important;
  }
  &.v-btn--icon.v-size--default {
    width: 24px;
    height: 24px;
    padding: 4px;
    margin: 4px;
    box-sizing: content-box;
  }
}
</style>
