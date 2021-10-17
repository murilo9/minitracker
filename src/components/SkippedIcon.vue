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
  color: #61acae;
  transform: rotate(90deg);
}
.v-icon.today {
  opacity: 0.5;
}
</style>