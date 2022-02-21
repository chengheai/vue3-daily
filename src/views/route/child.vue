<template>
  <div>
    <h1>第二层</h1>
    <a-button type="primary" @click="handleLink">下一层</a-button>
    <router-view></router-view>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const handleLink = () => {
      router.push('/route/first/second')
    }
    return {
      handleLink,
    }
  },
}
</script>

<style lang="scss" scoped></style>
