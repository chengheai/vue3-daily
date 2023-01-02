<template>
  <a-skeleton v-if="loading" avatar :paragraph="{ rows: 6 }" />
  <div v-else>
    <div>
      <a-image :width="200" :src="userInfo.avatar" />
    </div>
    <a-descriptions title="User Info">
      <a-descriptions-item label="UserName">{{ userInfo.username }}</a-descriptions-item>
      <a-descriptions-item label="Telephone">{{ userInfo.tel }}</a-descriptions-item>
      <a-descriptions-item label="Live">{{ userInfo.live }}</a-descriptions-item>
      <a-descriptions-item label="Remark">{{ userInfo.remark }}</a-descriptions-item>
      <a-descriptions-item label="Address">
        {{ userInfo.address }}
      </a-descriptions-item>
    </a-descriptions>
  </div>
</template>

<script setup>
// 注入方组件
import { inject, ref } from 'vue'
import { userInjectionKey } from '../utils'
import { sleep } from '../utils/base'
const loading = ref(true)
let userInfo = inject(userInjectionKey)
sleep(3000).then(() => {
  loading.value = false
  console.log('userInfo: ', userInfo)
})
</script>

<style lang="scss" scoped></style>
