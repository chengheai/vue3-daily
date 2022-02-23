<template>
  <div>
    <h1>alias</h1>
    <p>/alias1,/alias,/alias2,/alias3 都跳转此组件</p>
    <h1>路由组件props</h1>
    <p>{{ a }} {{ b }}</p>
    <h1>$route: 不需要在 setup 中返回 router 或 route</h1>
    <p>{{ $route }}</p>

    <router-link to="/alias1">alias1</router-link>
    <router-link to="/alias2">alias2</router-link>
    <router-link to="/alias3">alias3</router-link>
  </div>
</template>

<script>
// import { reactive, toRefs } from 'vue'
import { useRoute } from 'vue-router'

export default {
  props: ['a', 'b'],
  setup(props) {
    console.log('props: ', props)
    const route = useRoute()
    console.log('route: ', route)
    return {}
  },
}
</script>

<style lang="scss" scoped></style>
