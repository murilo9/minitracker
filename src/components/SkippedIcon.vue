<template>
  <v-icon :class="{ today }">mdi-power-on</v-icon>
</template>

<script>
export default {
  props: {
    today: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.v-icon {
  color: #61acae !important;
  opacity: 0.5;
  transform: rotate(90deg);
}
.today .v-icon {
  opacity: 1;
}
</style>