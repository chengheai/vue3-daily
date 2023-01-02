<template>
  <Child name="child" ref="myChild" />
  {{ tag }}
  <a-button type="primary" @click="() => myChild?.reset()">reset</a-button>
</template>

<script setup>
import { ref } from 'vue-demi'
import Child from './Child.vue'
const tag = ref(1)
const myChild = ref(null)
</script>

<style lang="scss" scoped></style>
