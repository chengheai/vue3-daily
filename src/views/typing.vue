<template>
  <h2 ref="myText">
    {{ msg }}
  </h2>
</template>

<script>
import { nextTick, ref, onMounted, watch } from 'vue'

export default {
  setup() {
    const myText = ref(null)
    const text = ref('js 实现的 打字效果，')
    const msg = ref('')
    const i = ref(0)
    function handleTyping() {
      if (i.value <= text.value.length) {
        msg.value = text.value.slice(0, i.value++) + '_'
        setTimeout(handleTyping, 200) //递归调用
      } else {
        msg.value = text.value + '。' //结束打字,移除 _ 光标
      }
    }
    watch(msg, (val) => {
      if (val.length > text.value.length) {
        // typingInter()
      }
    })
    const typingInter = () => {
      msg.value = '11'
      i.value = 0

      nextTick(() => {
        handleTyping()
      })
    }
    onMounted(() => {
      nextTick(() => {
        handleTyping()
      })
    })
    return {
      text,
      msg,
      myText,
      i,
      typingInter,
      handleTyping,
    }
  },
}
</script>

<style lang="scss" scoped></style>
