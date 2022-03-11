<script>
import { h, reactive, ref } from 'vue-demi'

export default {
  props: {
    name: {
      type: String,
      default: '默认',
    },
  },
  setup(props, { expose }) {
    console.log('props: ', props.name)
    const count = ref(0)
    const obj = reactive({ foo: 'bar' })
    const reset = () => (count.value = 0)
    expose({
      reset,
    })
    return () =>
      h('div', [
        h('h1', { hello: 'ok', onclick: () => count.value++ }, `count数量: ${count.value}`),
        h('h1', [count.value, obj.foo]),
        h('h2', { props: 'name' }, props.name),
        // h('p', this.$patent.tag),
      ])
  },
}
</script>
