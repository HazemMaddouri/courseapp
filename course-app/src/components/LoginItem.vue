<script setup>
import router from '@/router';
import { useUserStore } from '@/stores/user';

const userStore = useUserStore()

const props = defineProps({
  props: {
    username: "",
    password: ""
  }
})

const login = (username, password) => {
  if(username === username && password === password) {
  router.push('/main')

  const capitalizer = () => {
    let notfirstletter = username.slice(1)
    let firstletter = username.charAt(0)
    const capitalized = firstletter.toUpperCase() + notfirstletter
    return username = capitalized
  }
  return userStore.username = capitalizer(username)
}
}
</script>

<template>
  <form action="" @submit.prevent="login(username, password)">
    <label for="username"> Username : </label>
    <input type="text" name="username" v-model="username">
    <label for="password"> Password : </label>
    <input type="text" name="password" v-model="password">
    <button>Submit</button>
  </form>
</template>