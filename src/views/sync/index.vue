<template>
  <div>
    <Suspense>
      <template #default>
        <A />
      </template>
      <template #fallback> loading </template>
    </Suspense>
    <B />
    <div ref="target">
      <C v-if="targetIsVisible" />
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import { ref } from 'vue'
// import A from './A.vue'
import B from './B.vue'

const A = defineAsyncComponent(() => import('./A.vue'))
const C = defineAsyncComponent(() => import('./C.vue'))
const target = ref(null)
const targetIsVisible = ref(false)

const { stop } = useIntersectionObserver(target, ([{ isIntersecting }]) => {
  console.log('isIntersecting: ', isIntersecting)
  if (isIntersecting) {
    targetIsVisible.value = isIntersecting
  }
})
</script>

<style lang="scss" scoped></style>
