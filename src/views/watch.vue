<template>
  <div>
    <h1>{{ count }}</h1>
    <a-button type="primary" @click="handleCount"> count++ </a-button>
    <h2>{{ sex }}</h2>
    <a-button type="primary" @click="handleSex">
      switch {{ sex === 'male' ? 'female' : 'male' }}
    </a-button>
  </div>
</template>

<script>
import { reactive, toRefs, watch, watchEffect } from 'vue'

export default {
  setup() {
    const state = reactive({
      count: 0,
      sex: 'male',
      age: 10,
    })
    const handleCount = () => {
      state.count++
    }
    const handleSex = () => {
      state.sex = state.sex === 'female' ? 'male' : 'female'
    }
    watchEffect(() => {
      console.group('watchEffect')
      console.log(state.count)
      console.log(state.sex)
      console.log(state.age)
      console.groupEnd('watchEffect')
    })
    // watch(
    //   () => state,
    //   (newVal, oldVal) => {
    //     console.group('watch')
    //     console.log('oldVal: ', oldVal)
    //     console.log('newVal: ', newVal)
    //     console.groupEnd('watch')
    //   },
    //   {
    //     deep: true,
    //     immediate: true,
    //   }
    // )
    watch(
      () => [state.count, state.sex],
      ([newCount, newSex], [oldCount, oldSex]) => {
        console.group('watch mut')
        console.log('oldSex: ', oldSex)
        console.log('oldCount: ', oldCount)
        console.log('newSex: ', newSex)
        console.log('newCount: ', newCount)
        console.groupEnd('watch mut')
      }
    )
    return {
      ...toRefs(state),
      handleCount,
      handleSex,
    }
  },
}
</script>

<style lang="scss" scoped></style>
