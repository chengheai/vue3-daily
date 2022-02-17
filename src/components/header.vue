<template>
  <div class="header">
    <a-button type="primary"
      ><template #icon><left-outlined /></template>返回</a-button
    >
    <h2>vue3 demo</h2>
    <p>当前位置: 首页</p>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  },
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 56px;
  padding: 10px 5px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
