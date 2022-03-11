<template>
  <div class="wrap">
    <a-row :gutter="20">
      <a-col :span="12">
        <a-divider orientation="left">props 通信</a-divider>
        <com-props />
      </a-col>
      <a-col :span="12">
        <a-divider orientation="left">emits 通信</a-divider>
        <com-emits />
      </a-col>
      <a-col :span="12">
        <a-divider orientation="left">v-model 通信</a-divider>
        <com-model />
      </a-col>
      <a-col :span="12">
        <a-divider orientation="left">refs 通信</a-divider>
        <com-refs />
      </a-col>
      <a-col :span="12">
        <a-divider orientation="left">provide inject 通信</a-divider>
        <com-provide />
      </a-col>
      <a-col :span="12">
        <a-divider orientation="left">mitt tiny-emitter 通信</a-divider>
      </a-col>
      <a-col :span="12">
        <a-divider orientation="left">Vuex Pinia 通信</a-divider>
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
import comProps from './props'
import comEmits from './emit'
import comModel from './model'
import comRefs from './refs'
import comProvide from './provide'
</script>

<style lang="scss" scoped></style>
