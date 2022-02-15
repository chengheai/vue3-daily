<template>
  <div></div>
</template>

<script>
import { nextTick, onMounted } from 'vue'

export default {
  setup() {
    onMounted(() => {
      nextTick(() => {
        console.log('child nextTick')
      })
    })
  },
}
</script>

<style lang="scss" scoped></style>
