<template>
  <div>
    <h1>第三层</h1>
    <h3>route:</h3>
    <p>{{ route }}</p>
    <h3>router:</h3>
    <p>{{ router }}</p>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue-demi'
import { useRoute, useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const route = useRoute()

    const data = reactive({
      route,
      router,
    })
    return {
      ...toRefs(data),
    }
  },
}
</script>

<style lang="scss" scoped></style>
