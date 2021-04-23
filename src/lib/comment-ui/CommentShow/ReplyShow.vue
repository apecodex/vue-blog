<template>
  <div v-if="replyShow" class="reply-comment">
    <comment action="" rows="4" btnText="发送" :onSubmit="onSubmit" :dark="dark"/>
  </div>
</template>

<script setup>
import {computed, defineProps, ref} from "vue";

const props = defineProps({
  dark: {
    type: Boolean,
    default: false
  },
  isShow: {
    type: Boolean,
    default: false
  }
})

const replyShow = ref(computed(()=>props.isShow))

const onSubmit = (e, a) => {
  console.log(a);

  e.preventDefault()
}
</script>

<style scoped>

</style>