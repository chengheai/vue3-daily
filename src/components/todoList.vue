<template>
  <h1>otherStore:{{ otherUser }}</h1>
  <form @submit.prevent="handleAdd">
    <input type="text" v-model="text" />
    <button>Add</button>
  </form>
  <!-- {{ tempTodo }} -->
  <div style="margin: 5px" @click="handleClick">
    <button data-text="all">全部</button>
    <button data-text="finished">已完成</button>
    <button data-text="unfinished">未完成</button>
  </div>
  <ul v-if="!isEmpty">
    <li v-for="(item, index) in filterTodo" :key="index">
      <div>
        <input type="checkbox" v-model="item.isFinished" />
        <span
          :style="{ textDecoration: item.isFinished ? 'line-through' : '' }"
          >{{ item.text }}</span
        >
      </div>
      <button style="margin-left: 77px" @click="handleDel(item)" type="button">
        X
      </button>
    </li>
  </ul>
  <p v-else>暂无数据</p>
  <hr />
</template>
<script>
import { computed, reactive, toRefs } from 'vue'
import { useTodoStore } from '../store/todo'
import { storeToRefs } from 'pinia'
export default {
  setup(props) {
    console.log('props: ', props)
    const data = reactive({
      text: ''
    })
    const tempTodo = useTodoStore()
    const { filterTodo, otherUser } = storeToRefs(tempTodo)
    const handleAdd = () => {
      if (data.text === '') {
        alert('请输入')
        return
      }
      tempTodo.addTodo(data.text)
      data.text = ''
    }
    const isEmpty = computed(() => !filterTodo.value.length)
    const handleClick = e => {
      tempTodo.$patch({ filter: e.target.dataset.text })
    }
    const handleDel = row => {
      tempTodo.removeTodo(row)
    }

    return {
      ...toRefs(data),
      filterTodo,
      isEmpty,
      tempTodo,
      otherUser,
      handleAdd,
      handleDel,
      handleClick
    }
  }
}
</script>
<style lang="css" scoped>
ul {
  margin: 0;
  padding: 0;
}
ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 180px;
  list-style: none;
}
</style>
