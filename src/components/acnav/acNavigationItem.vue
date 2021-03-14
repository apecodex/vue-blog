<template>
  <button @click="itemBtn"><slot name="text"/></button>
</template>

<script setup>
  import { defineProps } from "vue";
  import { useRouter } from "vue-router";

  const router = useRouter()

  const props = defineProps({
    path: String
  });

  const itemBtn = () => {
    router.push("/acnav" + props.path)
  }
</script>

<style scoped>
  button {
    height: 30px;
    padding: 0 20px;
    background: transparent;
    margin: 5px;
    outline: none;
    border: 0;
    border-top: 1px dotted rgba(0, 0, 0, .3);
    border-bottom: 1px dotted rgba(0, 0, 0, .3);
    transition: .5s ease;
    cursor: url('assets/cursor/mouse2.cur'), auto;
  }

  button:hover {
    color: #fff;
    background: #333;
  }
</style>