<script setup>
import router from '@/router';
const props = defineProps({
  props: {
    username: "",
    password: ""
  }
})

const login = (username, password) => {
  if(username === "hazem" && password === "pass") {
  router.push('/main')
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