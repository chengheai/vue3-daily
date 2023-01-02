<template>
  <a-divider orientation="left">ref reactive</a-divider>
  <a-space>
    <a-button @click="count++" type="primary">{{ count }}</a-button>
    <a-button @click="count1++" type="primary">{{ count1 }}</a-button>
    <pre>
      let age = ref(12)
      let age = reactive({value:12})
    </pre>
  </a-space>
  <p v-for="(item, index) in arr" :key="index">{{ item }}</p>
  <a-divider orientation="left"
    >shallowRef shallowReactive triggerRef</a-divider
  >
  <pre>
  递归监听和非递归监听
ref和reactive都属于递归监听，也就是数据的每一层都是响应式的，如果数据量比较大，非常消耗性能，非递归监听只会监听数据的第一层。
使用shallowRef后，<h2>可以通过triggerRef()方法主动更新界面，实现界面刷新</h2>
<p style="color:red">注意：shallowReactive没有类似triggerRef()的方法</p>
</pre>
  <p>shallowRefObj:{{ shallowRefObj }}</p>
  <a-space>
    <a-button @click="handleChange" type="primary"
      >视图不更新：{{ shallowRefObj }}</a-button
    >
    <a-button @click="handleChange('trigger')" type="primary"
      >triggerRef:{{ shallowRefObj }}</a-button
    >
  </a-space>
  <a-divider orientation="left">toRaw</a-divider>
  <pre>
    有些时候我们不希望数据进行响应式实时更新，
    可以通过toRaw获取ref或reactive引用的原始数据，通过修改原始数据，
    不会造成界面的更新，只有通过修改ref和reactive包装后的数据时才会发生界面响应式变化。
  </pre>
  <p>{{ state1 }}</p>
  <a-space>
    <a-button type="primary" @click="handleClick('toRaw')"
      >改变toRaw,视图不更新</a-button
    >
    <a-button type="primary" @click="handleClick('reactive')"
      >改变reactive</a-button
    >
  </a-space>
</template>

<script>
import {
  reactive,
  toRefs,
  ref,
  shallowRef,
  shallowReactive,
  triggerRef,
  toRaw
} from 'vue'

export default {
  setup() {
    const count1 = ref(0)
    console.log('count1: ', count1)
    const state = reactive({
      count: 0
    })
    const arr = reactive([1, 2, 3, 4])
    console.log('arr: ', arr)
    const obj = ref({
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3
        }
      }
    })
    console.log('obj: ', obj)
    const shallowRefObj = shallowRef({
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3
        }
      }
    })
    const shallowReactiveObj = shallowReactive({
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3
        }
      }
    })
    console.log('shallowReactiveObj: ', shallowReactiveObj)
    // console.log('shallowReactiveObj: ', shallowReactiveObj)
    // console.group('shallowRef')
    // console.log('obj: ', obj)
    // console.log('shallowRefObj: ', shallowRefObj)
    // console.groupEnd('shallowRef')

    const obj1 = { a: 1, b: 2 }
    const state1 = reactive(obj1)
    const obj2 = toRaw(state1)
    console.log(obj1 === obj2)
    const handleClick = val => {
      if (val === 'toRaw') {
        obj2.a = Math.random()
        obj2.b = Math.random()
        console.log('obj2: ', obj2)
      } else {
        state1.a = Math.random()
        state1.b = Math.random()
      }
    }
    const handleChange = val => {
      shallowRefObj.value.b.d.e = Reflect.apply(Math.random, undefined, [])
      if (val === 'trigger') {
        triggerRef(shallowRefObj)
      }
      // console.log('shallowRefObj: ', shallowRefObj)
    }
    return {
      ...toRefs(state),
      count1,
      arr,
      shallowRefObj,
      handleChange,
      state1,
      handleClick
    }
  }
}
</script>

<style lang="scss" scoped></style>
