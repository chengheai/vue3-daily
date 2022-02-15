<template>
  <div>
    <input type="text" :value="modelValue" @input="handleTitle" />
    <input type="text" :value="content" @input="handleContent" />
    <button @click="$emit('test', Math.random() * 10)">emit</button>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: 'Default title',
    },
    content: {
      type: String,
      default: 'default content',
    },
  },
  emits: ['test'],
  setup(props, context) {
    const handleTitle = (e) => {
      context.emit('update:modelValue', e.target.value)
    }
    const handleContent = (e) => {
      context.emit('update:content', e.target.value)
    }
    return {
      handleTitle,
      handleContent,
    }
  },
}
</script>

<style lang="scss" scoped></style>
