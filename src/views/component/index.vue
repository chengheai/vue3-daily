<template>
  <div>
    <a-radio-group v-model:value="path" button-style="solid">
      <a-radio-button value="c1">组件1</a-radio-button>
      <a-radio-button value="c2">组件2</a-radio-button>
      <a-radio-button value="c3">组件3</a-radio-button>
    </a-radio-group>
    <transition name="component-fade" mode="out-in">
      <component :is="componentName" />
    </transition>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import Component1 from './c1.vue'
import Component2 from './c2.vue'
import Component3 from './c3.vue'
const path = ref('c1')
const componentName = computed(() => {
  switch (path.value) {
    case 'c1':
      return Component1
    case 'c2':
      return Component2
    case 'c3':
      return Component3
    default:
      return Component1
  }
})
</script>

<style lang="scss" scoped></style>
