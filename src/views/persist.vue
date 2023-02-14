<template>
  <div>
    nickname:{{ nickname }}
    <br />
    age:{{ age }} changeAge:{{ changeAge }}
    <br />

    <button @click="handleClick">change</button>
    <button @click="handleAction">action</button>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { userStore } from '@/store/user'
const store = userStore()
let { nickname, age, changeAge } = storeToRefs(store)
const handleClick = () => {
  store.$patch(state => {
    state.nickname = 'aaa'
    state.age = 111
  })
}
const handleAction = () => {
  store.addAge(10)
}
</script>

<style lang="scss" scoped></style>
