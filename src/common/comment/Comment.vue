<template>
  <div class="comment-container" v-if="isShow">
    <comment-container>
      <template #commentArea>
        <comment-area :emojiFlag="emojiFlag" 
                      :emoji="emojiText"
                      :rows="rows"
                      :placeholder="placeholder"
                      :actionUrl="actionUrl"
                      :method="method"
                      :submitFunc="submitFunc"
                      :btnText="btnText"
                      @changeEmojiFlag="changeEmojiFlag" ></comment-area>
      </template>
      <template #emoji>
        <emoji @getEmoji='getEmoji' />
      </template>
    </comment-container>
  </div>
</template>

<script setup>
  import CommentContainer from 'common/comment/CommentContainer.vue'
  import CommentArea from 'common/comment/CommentArea.vue'
  import Emoji from 'common/comment/Emoji.vue'

  import { defineProps, ref } from "vue";

  const props = defineProps({
    isShow: {
      type: Boolean,
      default: true
    },
    rows: String,
    placeholder: {
      type: String,
      default: '说点什么呢？'
    },
    actionUrl: {
      type: String,
      required: true
    },
    method: {
      type: String,
      default: 'post'
    },
    submitFunc: Function,
    btnText: {
      type: String,
      default: 'Message'
    }
  });

  const emojiFlag = ref(false)
  const emojiText = ref('')

  const changeEmojiFlag = () => {
    emojiFlag.value = !emojiFlag.value
  }


  const getEmoji = emoji => {
    emojiFlag.value = !emojiFlag.value
    emojiText.value = emoji
  }
</script>

<style scoped>


</style>