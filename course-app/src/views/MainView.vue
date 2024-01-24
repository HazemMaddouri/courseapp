<script setup>
import UserRunItem from '@/components/UserRunItem.vue';
import { useUserStore } from '@/stores/user';

const userStore = useUserStore()
</script>

<template>
  <div>
    <h1 class="is-size-1 has-text-centered">{{userStore.username}}'s running page</h1>
  </div>
  <UserRunItem />
</template>