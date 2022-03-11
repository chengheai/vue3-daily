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
import { ref, defineEmits, defineProps } from 'vue'
import { message } from 'ant-design-vue'
const value = ref('')
const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
})
const emits = defineEmits(['update:list'])
const onSearch = (val) => {
  if (!val) {
    message.info('This is a required input')
    return
  }
  const arr = props.list
  arr.push(val)
  emits('update:list', arr)
  value.value = ''
}
</script>
