<template>
  <div>
    <a-button type="primary" @click="handlePush">push</a-button>
    <ul>
      <li v-for="item in numbers" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import { reactive, watch, watchEffect } from 'vue'

export default {
  setup() {
    const numbers = reactive([1, 2, 3, 4])
    watch(
      () => [...numbers],
      (newVal, oldVal) => {
        console.log(newVal, oldVal)
      }
    )
    watchEffect(() => {
      console.log('watchEffect')
    })
    const handlePush = () => {
      numbers.push(numbers[numbers.length - 1] + 1)
    }
    return {
      numbers,
      handlePush,
    }
  },
}
</script>

<style lang="scss" scoped></style>
