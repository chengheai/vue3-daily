<template>
  <div>
    <AsyncPage />
  </div>
</template>
<script>
import { defineAsyncComponent } from 'vue'
export default {
  components: {
    AsyncPage: defineAsyncComponent({
      loader: () => import('./test.vue'),
      delay: 4000,
      timeout: 3000,
      loadingComponent: () => import('./loading.vue'),
    }),
  },
}
</script>
