<template>
  <h1>
    {{ text }}
  </h1>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  setup() {
    const state = reactive({
      text: 'loading',
    })

    return {
      ...toRefs(state),
    }
  },
}
</script>

<style lang="scss" scoped></style>
