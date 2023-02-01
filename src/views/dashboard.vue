<template>
  <a-row>
    <a-col :xs="10" :sm="8" :md="6" :lg="4" :xl="2">
      <a-button type="primary" @click="handleLink('props')">setup参数</a-button>
    </a-col>
    <a-col :xs="10" :sm="8" :md="6" :lg="4" :xl="2">
      <a-button type="primary" @click="handleLink('watch')">watch</a-button>
    </a-col>
    <a-col :xs="10" :sm="8" :md="6" :lg="4" :xl="2">
      <a-button type="primary" @click="handleLink('base')">base</a-button>
    </a-col>
    <a-col :xs="10" :sm="8" :md="6" :lg="4" :xl="2">
      <a-button type="primary" @click="handleLink('route')">route嵌套</a-button>
    </a-col>
    <a-col :xs="10" :sm="8" :md="6" :lg="4" :xl="2">
      <a-button type="primary" @click="handleLink('route-mut')">route多个</a-button>
    </a-col>
    <a-col :xs="10" :sm="8" :md="6" :lg="4" :xl="2">
      <a-button type="primary" @click="handleLink('test')">test</a-button>
    </a-col>
    <a-col :xs="10" :sm="8" :md="6" :lg="4" :xl="2">
      <a-button type="primary" @click="handleLink('alias')">alias</a-button>
    </a-col>
    <a-col :xs="10" :sm="8" :md="6" :lg="4" :xl="2">
      <a-button type="primary" @click="handleLink('ref')">ref</a-button>
    </a-col>
    <a-col :xs="10" :sm="8" :md="6" :lg="4" :xl="2">
      <a-button type="primary" @click="handleLink('ref-reactive')">ref&reactive</a-button>
    </a-col>
    <a-col :xs="10" :sm="8" :md="6" :lg="4" :xl="2">
      <a-button type="primary" @click="handleLink('typing')">auto typing</a-button>
    </a-col>
    <a-col :xs="10" :sm="8" :md="6" :lg="4" :xl="2">
      <a-button type="primary" @click="handleLink('communication')">组件通信集</a-button>
    </a-col>
    <a-col :xs="10" :sm="8" :md="6" :lg="4" :xl="2">
      <a-button type="primary" @click="handleLink('h')">渲染函数</a-button>
    </a-col>
    <a-col :xs="10" :sm="8" :md="6" :lg="4" :xl="2">
      <a-button type="primary" @click="handleLink('component')">组件渲染</a-button>
    </a-col>
    <a-col :xs="10" :sm="8" :md="6" :lg="4" :xl="2">
      <a-button type="primary" @click="handleLink('watch-group')">监听集合</a-button>
    </a-col>
    <a-col :xs="10" :sm="8" :md="6" :lg="4" :xl="2">
      <a-button type="primary" @click="handleLink('chaining')">chaining</a-button>
    </a-col>
    <a-col :xs="10" :sm="8" :md="6" :lg="4" :xl="2">
      <a-button type="primary" @click="handleLink('inject')">inject</a-button>
    </a-col>
  </a-row>
  <!-- <a-space :size="8">
    <a-button type="primary" @click="handleLink('props')">setup参数</a-button>
  </a-space> -->
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const handleLink = path => {
      router.push(`/${path}`)
      window.sessionStorage.setItem('session', 'test')
    }
    return {
      handleLink
    }
  }
}
</script>

<style lang="scss" scoped>
.ant-btn {
  margin-bottom: 10px;
}
</style>
