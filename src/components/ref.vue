<template>
  <div class="wrap">
    <h1>{{ height }}px</h1>
    <div ref="myRef">
      <img v-for="i in items" :key="i" :src="i" alt="" srcset="" />
      <!-- <h2 v-for="i in items" :key="i">{{ i }}</h2> -->
    </div>
  </div>
</template>

<script>
import { nextTick, onMounted, reactive, toRefs, ref, watch } from 'vue'
import axios from 'axios'
export default {
  setup() {
    const state = reactive({
      height: 0,
      items: [],
    })
    const handleLoad = () => {
      axios.get('https://dog.ceo/api/breeds/image/random/3').then((res) => {
        state.items = res.data.message
      })
    }
    const myRef = ref(null)
    watch(
      () => state,
      (newVal, val) => {
        nextTick(() => {
          console.log('nextTick2')
          console.log(myRef.value)
          state.height = myRef.value.offsetHeight
        })
      },
      {
        deep: true,
        // immediate: true,
      }
    )
    onMounted(async () => {
      await handleLoad()

      nextTick(() => {
        console.log('nextTick1')
      })
    })
    return {
      myRef,
      ...toRefs(state),
    }
  },
}
</script>

<style lang="css" scoped>
.wrap img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  margin: 5px;
}
</style>
