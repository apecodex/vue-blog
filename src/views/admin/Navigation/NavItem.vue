<template>
  <li @click="btnItem" :class="{'active': isActive}">
    <div>
      <span class="icon"><i class="fa" :class="fontawesome" aria-hidden="true"></i></span>
      <span class="title">{{ title }}</span>
    </div>
  </li>
</template>

<script setup>
import {computed, defineProps, ref} from "vue";
import {useRoute, useRouter} from "vue-router";

  const router = useRouter()
const route = useRoute()

  const props = defineProps({
    path: {
      type: String,
      required: true,
      default: ''
    },
    fontawesome: String,
    title: String
  })

  const path = ref(props.path)

  const isActive = ref(computed(() => {
    if (path.value !== "") {
      return route.path.indexOf(path.value) !== -1;
    }
  }))

  const btnItem = () => {
    router.push('/admin/' + path.value);
  }
</script>

<style scoped>
  @import url('assets/css/admin/navigation/navigation.css');
</style>