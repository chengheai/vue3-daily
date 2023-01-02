<template>
  <Child :list="list" />
  <a-input-search
    v-model:value="value"
    placeholder="input search text"
    size="large"
    @search="onSearch"
  >
    <template #enterButton>
      <a-button type="primary">添加</a-button>
    </template>
  </a-input-search>
</template>

<script setup>
import Child from './child.vue'
import { ref } from 'vue'
import { message } from 'ant-design-vue'
const value = ref('')
const list = ref(['javascript', 'python'])
const onSearch = val => {
  if (!val) {
    message.info('This is a required input')
    return
  }
  list.value.push(val)
  value.value = ''
}
</script>
