<template>
  <div>parent</div>
  <child ref="comp1" id="ffff" :title="msg" otherTitle="其他参数" @sonClick="sonClick">
    <template #a_slot> slot1212121 </template>
  </child>
  <a-button type="primary" @click="handleRef">ref</a-button>
  <child1 ref="comp" />
  <a-button type="primary" @click="handleExpose">expose</a-button>
</template>

<script>
import { onMounted, reactive, toRefs, ref, nextTick } from 'vue'
import Child from './child.vue'
import Child1 from './child1.vue'
export default {
  components: {
    Child,
    Child1,
  },

  setup() {
    const comp = ref(null)
    const comp1 = ref(null)
    const state = reactive({
      msg: '我是父组件的title',
    })
    const sonClick = (p) => {
      console.log('p: ', p)
    }
    const handleExpose = () => {
      comp.value.refresh()
    }
    const handleRef = () => {
      nextTick(() => {
        comp1.value.sonHeader()
      })
    }
    onMounted(() => {
      handleExpose() // output: refresh
    })
    return {
      ...toRefs(state),
      sonClick,
      handleExpose,
      handleRef,
      comp,
      comp1,
    }
  },
}
</script>

<style lang="scss" scoped></style>
