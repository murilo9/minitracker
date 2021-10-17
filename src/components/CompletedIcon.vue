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
  color: #338531;
}
.v-icon.today {
  opacity: 0.5;
}
</style>