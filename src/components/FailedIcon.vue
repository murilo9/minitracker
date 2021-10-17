<template>
  <v-icon :class="{ today }">mdi-close</v-icon>
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
  color: #9c1d1d;
}
.v-icon.today {
  opacity: 0.5;
}
</style>