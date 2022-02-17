<template>
  <a-row>
    <a-col :xs="10" :sm="8" :md="6" :lg="4" :xl="2">
      <a-button type="primary" @click="handleLink('watch')">watch</a-button>
    </a-col>
    <a-col :xs="10" :sm="8" :md="6" :lg="4" :xl="2">
      <a-button type="primary" @click="handleLink('base')">base</a-button>
    </a-col>
    <a-col :xs="10" :sm="8" :md="6" :lg="4" :xl="2">
      <a-button type="primary" @click="handleLink('test')">test</a-button>
    </a-col>
  </a-row>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const handleLink = (path) => {
      router.push(`/${path}`)
    }
    return {
      handleLink,
    }
  },
}
</script>

<style lang="scss" scoped>
.a-col {
  margin-bottom: 10px;
}
</style>
