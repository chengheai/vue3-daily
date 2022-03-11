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
</template>

<script setup>
import { inject } from 'vue'
const list = inject('list')
</script>
