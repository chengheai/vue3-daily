<template>
  <div>
    <a-divider orientation="left">flush: sync</a-divider>
    <flush />
    <a-divider orientation="left">array () => [...numbers]</a-divider>
    <array />
  </div>
</template>

<script setup>
import flush from './flush.vue'
import array from './array.vue'
</script>
