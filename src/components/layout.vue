<template>
  <div>
    <head />
    <router-view />
  </div>
</template>

<script>
import Head from './header.vue'
export default {
  components: {
    Head,
  },
  setup() {},
}
</script>

<style lang="scss" scoped></style>
