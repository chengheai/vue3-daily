<template>
  <div>
    <XmHead />
    <router-view />
  </div>
</template>

<script>
import XmHead from './header.vue'
export default {
  components: {
    XmHead
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
