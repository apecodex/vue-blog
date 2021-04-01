<template>
  <div class="user-inner box-border-dark">
    <component :is="userComp"></component>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";

  import NoUser from 'components/home/user/NoUser.vue'
  import User from 'components/home/user/User.vue'

  const isLogin = ref(true);

  const userComp = computed(() => {
    return isLogin.value ? User:NoUser
  })

</script>

<style scoped>

</style>
