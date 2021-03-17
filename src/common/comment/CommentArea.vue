<template>
  <form :action="actionUrl" :method="method" autocomplete="off" @submit="onSubmit">
    <textarea name="message" v-model="message" id="message" :placeholder="placeholder" ref="contentArea"/>
    <button>{{ btnText }}</button>
  </form>
</template>

<script setup>
  import { defineProps, defineEmit, ref, watchEffect, nextTick } from "vue";

  import { utf16toEntities, entitiestoUtf16 } from 'utils/utils.js'

  const props = defineProps({
    emojiFlag: Boolean,  // 标记已点击表情包
    emoji: String,

    placeholder: {
      type: String,
      default: '说点什么？'
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

  const emit = defineEmit(['changeEmojiFlag'])

  const message = ref('')  // 文本内容
  const contentArea = ref(null)  // textarea dom

  watchEffect(() => {
    // 根据光标插入表情包
    if (props.emojiFlag) {
      let startPos = contentArea.value.selectionStart;
      let endPos = contentArea.value.selectionEnd;
      if (startPos !== undefined || endPos !== undefined) {
        let txt = message.value
        let result = txt.substring(0, startPos) + entitiestoUtf16(props.emoji) + txt.substring(endPos)
        message.value = result
        nextTick(() => {
          contentArea.selectionStart = startPos + entitiestoUtf16(props.emoji);
          contentArea.selectionEnd = startPos + entitiestoUtf16(props.emoji);
        })
      }
      // 添加完表情包之后重新改变表情包点击的标记
      emit('changeEmojiFlag')
    }
  })

  const onSubmit = e => {
    props.submitFunc(e, utf16toEntities(message.value))
  }
</script>

<style scoped>

  form textarea {
    width: 100%;
    height: 100px;
    resize: none;
    padding: 5px;
    outline: none;
    border-radius: 6px;
    font-weight: bold;
    color: tomato;
    transition: .5s ease;
  }

  form textarea::placeholder {
    color: sienna;
    font-weight: normal;
    padding-left: 3px;
  }

  form textarea:hover {
    border-color: violet;
  }

  form button {
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: 10px;
    margin-right: 5px;
    padding: 0 8px;
    height: 30px;
    border: 0;
    outline: none;
    background-color: rgba(0, 0, 0, .3);
    border-radius: 14px;
    color: #fff;
    font-weight: bolder;
    z-index: 999;
  }

  form button:hover {
    color: orangered;
  }

  textarea::-webkit-scrollbar {
    width: 8px;
    background-color: rgba(206, 191, 191, 0.3);
  }
  textarea::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
    background-color: rgba(219, 157, 243, 0.3)
  }

</style>