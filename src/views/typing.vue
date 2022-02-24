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
    const text = ref('业精于勤荒于嬉；行成于思毁于随。方今圣贤相逢，治具毕张，拔去凶邪，登崇俊良')
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
      if (val.length - text.value.length === 1) {
        debounce(typingInter(), 1000)
      }
    })
    function debounce(fn, delay) {
      let timer = null
      return function () {
        clearTimeout(timer)
        timer = setTimeout(() => {
          fn.apply(this, arguments)
        }, delay)
      }
    }
    const typingInter = () => {
      setTimeout(() => {
        msg.value = ''
        i.value = 0

        nextTick(() => {
          handleTyping()
        })
      }, 2000)
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
      debounce,
      handleTyping,
    }
  },
}
</script>

<style lang="scss" scoped></style>
