import { defineStore } from 'pinia'
import { useOtherStore } from './other'
export const useTodoStore = defineStore('todo', {
  state: () => ({
    todo: [],
    filter: 'all',
    nextId: 0,
  }),
  getters: {
    otherUser() {
      const other = useOtherStore()
      return other.name
    },
    finishedTodo(state) {
      return state.todo.filter((todo) => todo.isFinished)
    },
    unFinishedTodo(state) {
      return state.todo.filter((todo) => !todo.isFinished)
    },
    filterTodo(state) {
      if (this.filter === 'finished') {
        return this.finishedTodo
      } else if (this.filter === 'unfinished') {
        return this.unFinishedTodo
      }
      return this.todo
    },
  },
  actions: {
    addTodo(text) {
      this.todo.push({
        text,
        id: this.nextId++,
        isFinished: false,
      })
    },
    removeTodo(text) {
      const index = this.todo.lastIndexOf(text)
      if (index > -1) this.todo.splice(index, 1)
    },
  },
})
