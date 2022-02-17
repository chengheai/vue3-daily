<template>
  <div>
    <todo-list />
    <br />
    <div>{{ msg }}的年龄为{{ age }}</div>
    <div>computed: {{ double }}</div>
    <a-content :msg="msg" @change="handleChange"></a-content>
    <button @click="add">+</button>
    <a-child v-model="title" v-model:content="content" @test="handleTest" />
    {{ random }}
    <p>title:{{ title }}</p>
    <p>content:{{ content }}</p>
    <hr />
    <a-slot>
      <span>121212</span>
      <template v-slot:test="{ data }">
        {{ data }}
      </template>
    </a-slot>
    <ul>
      <li v-for="item in list" :ref="setItemRef" :key="item">{{ item }}</li>
    </ul>

    <p>x:{{ x }},y:{{ y }}</p>

    <a-async />
    <h @vnode-updated="handleUpdated" />

    <key-code />
    <a-ref />
    <h1 @click="mixinClick">{{ mixin }}</h1>
    <a-next-tick />
  </div>
</template>

<script>
import {
  reactive,
  toRefs,
  computed,
  watch,
  onBeforeUpdate,
  onUpdated,
  onMounted,
  nextTick,
} from 'vue'
import AContent from '@/components/Content.vue'
import AChild from '@/components/Child.vue'
import ASlot from '@/components/Slot.vue'
import { useMousePosition } from '@/hooks/useMousePosition'
import AAsync from '@/components/async.vue'
import h from '@/components/h.jsx'
import keyCode from '@/components/keycode.vue'
import aRef from '@/components/ref.vue'
import Mixins from '@/components/mixins'
import aNextTick from '@/components/nextTick.vue'
import todoList from '@/components/todoList.vue'
export default {
  name: 'App',
  components: {
    AContent,
    AChild,
    ASlot,
    AAsync,
    h,
    keyCode,
    aRef,
    aNextTick,
    todoList,
  },
  mixins: [Mixins],
  setup() {
    const { x, y } = useMousePosition()
    const data = reactive({
      msg: 'alex',
      age: 10,
      double: computed(() => {
        return data.age * 2
      }),
      title: '标题',
      content: '内容',
      list: [1, 2, 3, 4],
      random: 0,
    })
    const add = () => {
      data.age += 1
    }
    const handleChange = (params) => {
      console.log('params: ', params)
    }
    const handleTest = (p) => {
      data.random = p
      // console.log('p:', p)
    }
    // 不指定数据源
    // watch(() => {
    //   console.log('app watch:', data.age)
    // })

    // watch(
    //   () => data.age,
    //   () => {
    //     console.log('ss:', data.age)
    //   }
    // )
    watch(
      () => data.age,
      (newVal, oldVal, clean) => {
        console.log('prev:', oldVal + '===' + 'cur:' + newVal)
        clean(() => {
          console.log('clean')
        })
      }
    )
    let itemRefs = []
    const setItemRef = (el) => {
      if (el) {
        itemRefs.push(el)
      }
    }
    onBeforeUpdate(() => {
      itemRefs = []
    })
    onUpdated(() => {
      // console.log('itemRefs:', itemRefs)
    })
    onMounted(() => {
      nextTick(() => {
        console.log('parent nextTick')
      })
    })
    const handleUpdated = () => {
      console.log('updated')
    }
    return {
      ...toRefs(data),
      add,
      handleChange,
      handleTest,
      setItemRef,
      handleUpdated,
      x,
      y,
    }
  },
}
</script>

<style lang="scss" scoped></style>
