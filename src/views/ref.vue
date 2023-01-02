<template>
  <div>
    <p>源: obj1:{{ obj1 }}</p>
    <p>源: obj2:{{ obj2 }}</p>
    <p>源: obj3:{{ obj3 }}</p>
    <p>newObj1:{{ newObj1 }}</p>
    <p>newObj2:{{ newObj2 }}</p>
    <p>newObj3:{{ newObj3 }}</p>
    <pre>
    ref和toRef的区别
      (1). ref本质是拷贝，修改响应式数据不会影响原始数据；toRef的本质是引用关系，修改响应式数据会影响原始数据
      (2). ref数据发生改变，界面会自动更新；toRef当数据发生改变是，界面不会自动更新
      (3). toRef传参与ref不同；toRef接收两个参数，第一个参数是哪个对象，第二个参数是对象的哪个属性

    </pre>
    <a-space>
      <a-tooltip
        placement="topLeft"
        title="响应式数据发生改变，而原始数据obj并不会改变。
原因在于，ref的本质是拷贝，与原始数据没有引用关系"
      >
        <a-button type="primary" @click="handleChange('ref')"
          >ref change</a-button
        >
      </a-tooltip>
      <a-tooltip
        title="响应式数据发生改变，原始数据obj并不会改变，但是UI界面不会更新"
      >
        <a-button type="primary" @click="handleChange('toRef')"
          >toRef change</a-button
        >
      </a-tooltip>
      <a-tooltip
        title="有的时候，我们希望将对象的多个属性都变成响应式数据，并且要求响应式数据和原始数据关联，并且更新响应式数据的时候不更新界面，就可以使用toRefs，用于批量设置多个数据为响应式数据"
      >
        <a-button type="primary" @click="handleChange('toRefs')"
          >toRefs change</a-button
        >
      </a-tooltip>
    </a-space>
  </div>
</template>

<script>
import { ref, toRef, toRefs } from 'vue'
export default {
  setup() {
    let obj1 = { name: 'alice', age: 11 }
    let obj2 = { name: 'alex', age: 11 }
    let obj3 = { name: 'jeff', age: 11 }
    let newObj1 = ref(obj1.name)

    let newObj2 = toRef(obj2, 'name')
    let newObj3 = toRefs(obj3)
    function handleChange(val) {
      if (val === 'ref') {
        newObj1.value = 'Tom1'
      } else if (val === 'toRef') {
        newObj2.value = 'Tom2fff'
        console.log('newObj2: ', newObj2)
      } else {
        newObj3.name.value = 'fff'
        newObj3.age.value = 30
      }
    }
    return { obj1, obj2, obj3, newObj1, newObj2, newObj3, handleChange }
  }
}
</script>

<style lang="scss" scoped></style>
