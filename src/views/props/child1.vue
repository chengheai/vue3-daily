<template>
  <div>
    child1
    <h1>{{ hh }}</h1>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue-demi'
export default {
  setup(props, { expose }) {
    const data = reactive({
      hh: 1111,
    })
    const refresh = () => {
      data.hh = Reflect.apply(Math.random, undefined, [])
      console.log('refresh')
    }
    expose({
      refresh,
    })
    return {
      ...toRefs(data),
    }
  },
}
</script>

<style lang="scss" scoped></style>
