<template>
  <div class="wrap" :class="{ bg: showBg }">
    <div class="header">
      <a-button type="primary" @click="goBack"
        ><template #icon><left-outlined /></template>返回</a-button
      >
      <h2>VUE3 DEMO</h2>
      <span>当前位置: [ {{ title || '首页' }} ]</span>
    </div>

    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Head from './components/header.vue'

import { useRouter, useRoute } from 'vue-router'

import { reactive, toRefs, watch } from 'vue'
export default {
  components: {
    Head,
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const data = reactive({
      title: '',
      showBg: false,
    })

    watch(
      () => route.meta.title,
      (val) => {
        data.title = val

        if (val === '首页') {
          data.showBg = true
        } else {
          data.showBg = false
        }
      },
      {
        immediate: true,
      }
    )

    const goBack = () => {
      router.go(-1)
    }
    return {
      ...toRefs(data),
      goBack,
      route,
    }
  },
}
</script>

<style lang="scss" scoped>
.bg {
  background: url('./assets/bg.jpeg') no-repeat;
}
.wrap {
  height: 100vh;
  // overflow: hidden;
  position: relative;
  // background-size: cover;
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
    min-height: calc(100vh - 56px);
    // background: #fff;
    padding: 15px;
    // border: 1px solid #fff;
    position: relative;
    top: 56px;
  }
}
</style>
