<template>
  <a-list item-layout="horizontal" :data-source="list">
    <template #renderItem="{ item }">
      <a-list-item>
        <a-list-item-meta>
          <template #title>
            <span>{{ item }}</span>
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
  <Child v-model:list="list" />
</template>

<script setup>
import Child from './child.vue'
import { defineProps, ref } from 'vue'
const list = ref(['javascript', 'CSS'])
</script>
