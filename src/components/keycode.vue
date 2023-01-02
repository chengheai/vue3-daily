<template>
  <div>
    <input type="text" v-model="data.num" id="" @keypress.q="handlePress" />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
const data = reactive({
  num: ''
})
const handlePress = () => {
  console.log(111)
}
</script>

<style lang="scss" scoped></style>
