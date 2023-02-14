<template>
  <div style="height: 400px; background-color: aqua">
    <img v-for="i in list" :key="i" :src="i" alt="" />
  </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import axios from 'axios'
let list = reactive([])
onMounted(async () => {
  setTimeout(async () => {
    await axios.get('https://dog.ceo/api/breeds/image/random/3').then(res => {
      console.log('res: ', res)
      list = res.data.message
    })
  }, 3000)
})
</script>

<style lang="scss" scoped></style>
