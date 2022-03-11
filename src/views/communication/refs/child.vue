<template>
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
import { ref, defineExpose } from 'vue'
import { message } from 'ant-design-vue'
const value = ref('')
const list = ref(['javascript', 'go'])

const onSearch = (val) => {
  if (!val) {
    message.info('This is a required input')
    return
  }
  list.value.push(val)
  value.value = ''
}
defineExpose({ list })
</script>
