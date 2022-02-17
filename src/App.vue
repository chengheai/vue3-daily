<template>
  <div class="wrap">
    <div class="header">
      <a-button type="primary" @click="goBack"
        ><template #icon><left-outlined /></template>返回</a-button
      >
      <h2>VUE3 DEMO</h2>
      <span>当前位置: [ {{ route.meta.title || '首页' }} ]</span>
    </div>

    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Head from './components/header.vue'
import { useRouter, useRoute } from 'vue-router'
export default {
  components: {
    Head,
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    console.log('route: ', route.meta.title)
    const goBack = () => {
      router.go(-1)
    }
    return {
      goBack,
      route,
    }
  },
}
</script>

<style lang="scss" scoped>
.wrap {
  background: #f0f2f5;
  padding-bottom: 71px;
  height: 100vh;
  // overflow: hidden;
  position: relative;
  .header {
    width: 100%;
    height: 56px;
    padding: 10px 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #08979c;
    color: #fff;
    position: fixed;
    top: 0;
    z-index: 999;
    h2 {
      color: #fff;
      font-style: normal;
      margin: 0;
    }
  }
  .content {
    // margin-top: 71px;
    min-height: calc(100vh - 100px);
    background: #fff;
    margin: 15px;
    padding: 15px;
    border: 1px solid #fff;
    position: relative;
    top: 56px;
  }
}
</style>
