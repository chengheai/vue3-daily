<template>
  <div>1234</div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  setup() {
    const state = reactive({
      count: 0
    })
    console.log(state?.count?.aa || '123')
    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped></style>
