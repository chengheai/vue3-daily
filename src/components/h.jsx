import { h, reactive } from 'vue'
export default {
  setup(props, { slots, attrs, emit }) {
    console.log('props: ', props)
    const state = reactive({
      count: 0,
    })
    const increment = () => {
      state.count++
    }
    return () =>
      h(
        'button',
        {
          onClick: increment,
        },
        state.count
      )
  },
}
