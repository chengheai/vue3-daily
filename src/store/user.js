import { defineStore } from 'pinia'

export const userStore = defineStore('user', {
  state: () => {
    return {
      age: 10,
      nickname: 'alex'
    }
  },
  getters: {
    changeAge() {
      return this.age + 10
    }
  },
  actions: {
    addAge(val) {
      this.age += val
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'user_xxx',
        storage: localStorage
      }
    ]
  }
})
