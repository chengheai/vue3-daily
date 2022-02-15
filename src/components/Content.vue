<template>
  <div @click="handleClick">
    {{ data }}
  </div>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  name: 'content',
  props: {
    msg: String,
    default: '',
  },
  setup(props, ctx) {
    console.log('ctx: ', ctx)
    console.log('props: ', props)
    const data = ref(props.msg)
    const a = ref(18)
    watch(a, () => {
      console.log(a.value)
    })
    const handleClick = () => {
      ctx.emit('change', 'hello world')
    }
    return {
      data,
      handleClick,
    }
  },
}
</script>

<style lang="scss" scoped></style>
