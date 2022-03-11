<template>
  <div>
    <h1>{{ firstName }}</h1>
    <h1>{{ lastName }}</h1>
    <a-button type="primary" @click="handleChange">change</a-button>
  </div>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  setup() {
    const firstName = ref('jeff')
    const lastName = ref('merry')
    watch(
      [firstName, lastName],
      (newVal, oldVal) => {
        console.log(newVal, oldVal)
      },
      { flush: 'sync' }
    )
    const handleChange = () => {
      firstName.value = 'jim'
      lastName.value = 'ok'
    }
    return {
      firstName,
      lastName,
      handleChange,
    }
  },
}
</script>

<style lang="scss" scoped></style>
