<template>
  <v-icon :class="{ today }">mdi-check</v-icon>
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
  color: #338531 !important;
  opacity: 0.5;
}
.today .v-icon {
  opacity: 1;
}
</style>