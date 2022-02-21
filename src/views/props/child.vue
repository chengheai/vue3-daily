<template>
  <div @click="sonHeader">我是子组件</div>
  <h1>自己的data:{{ m1 }}</h1>
  <p>props: {{ title }}</p>
  <p>attrs: {{ attrs.id }}</p>
  <p>attrs: {{ attrs.otherTitle }}</p>

  <slot name="a_slot" />
</template>

<script>
import { defineComponent, reactive, toRefs, defineExpose } from 'vue'
/*

attrs 和 slots 是有状态的对象，它们总是会随组件本身的更新而更新。
这意味着你应该避免对它们进行解构，并始终以 attrs.x 或 slots.x 的方式引用 property。
*/
export default defineComponent({
  name: 'Child',
  props: {
    title: {
      type: String,
      default: '默认',
    },
  },
  emits: ['son-click'],
  setup(props, { attrs, emit, expose, slots }) {
    console.log('attrs: ', attrs) // 所有属性，不包含props定义接收的属性
    console.log('emit: ', emit)
    console.log('slots: ', slots)
    console.log('expose: ', expose)
    console.log('props:', props)
    const data = reactive({
      m1: 'ggggg',
    })
    const sonHeader = () => {
      emit('son-click', '子组件传递给父组件')
    }

    return {
      sonHeader,
      ...toRefs(props),
      ...toRefs(data),
      attrs,
    }
  },
})
</script>

<style lang="scss" scoped></style>
