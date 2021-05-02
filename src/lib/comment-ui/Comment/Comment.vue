<template>
  <section class="comment-section" :class="{'dark': dark}">
    <div class="comment-container" :class="{'dark': dark}">
      <form :action="action" :method="method" autocomplete="off" @submit="onSubmit">
        <div class="comment-textarea">
          <textarea :class="{'dark': dark}" name="content" v-model="content" :rows="rows" :placeholder="placeholder" ref="contentArea" />
        </div>
        <div class="tool">
          <button class="comment-btn" :class="{'dark': dark}"><i class="el-icon-loading" v-if="loading"></i>{{ btnText }}</button>
          <emoji @getEmoji='getEmoji' :dark="dark"/>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
  import Emoji from './Emoji.vue'

  import {defineProps, nextTick, ref, watchEffect} from "vue";
  import {entitiestoUtf16, utf16toEntities} from 'utils/utils.js'

  const props = defineProps({
    action: String,
    method: {
      type: String,
      default: 'post',
    },
    dark: {
      type: Boolean,
      default: false
    },
    rows: String,
    placeholder: {
      type: String,
      default: '说点啥呢？'
    },
    btnText: {
      type: String,
      default: '提交'
    },
    content: {
      type: String,
      default: '',
    },
    loading: false,
    onSubmit: Function
  })

  const emojiFlag = ref(false)  // 防止多次点击
  const emojiText = ref('')  // emoji
  const content = ref(props.content)  // 内容
  const contentArea = ref(null)

  watchEffect(() => {
    // 根据光标插入表情包
    if (emojiFlag.value) {
      let startPos = contentArea.value.selectionStart;
      let endPos = contentArea.value.selectionEnd;
      if (startPos !== undefined || endPos !== undefined) {
        let txt = content.value
        content.value = txt.substring(0, startPos) + entitiestoUtf16(emojiText.value) + txt.substring(endPos)
        nextTick(() => {
          contentArea.selectionStart = startPos + entitiestoUtf16(emojiText.value);
          contentArea.selectionEnd = startPos + entitiestoUtf16(emojiText.value);
        })
      }
      // 添加完表情包之后重新改变表情包点击的标记
      emojiFlag.value = !emojiFlag.value
    }
  })

  const getEmoji = emoji => {
    emojiFlag.value = !emojiFlag.value
    emojiText.value = emoji
  }

  const onSubmit = e => {
    props.onSubmit(e, utf16toEntities(content.value))
  }
</script>

<script>
export default {
  name: 'Comment'
}
</script>

<style scoped>

section.comment-section {
  width: 100%;
  border-radius: 8px;
}

section.dark {
  background: #20222a;
}

section.comment-section .comment-container {
  border: 1px solid rgba(0,0,0,.3);
  padding: 5px;
  border-radius: 6px;
  transition: .3s;
}

section.comment-section .comment-container.dark {
  border-color: rgba(255, 255, 255, 0.3);
}

section.comment-section .comment-container:hover {
  border-color: #03a9f4;
}

section.comment-section .comment-container.dark:hover {
  border-color: #03a9f4;
}

section.comment-section .comment-container .comment-textarea textarea {
  width: 100%;
  resize: none;
  outline: none;
  border: 0;
  border-radius: 6px;
  font-weight: bold;
  color: tomato;
  transition: .5s ease;
}

section.comment-section .comment-container .comment-textarea textarea.dark {
  background: #20222a;
}

section.comment-section .comment-container .comment-textarea textarea::placeholder {
  color: sienna;
  font-weight: normal;
  padding-top: 3px;
  padding-left: 3px;
  font-size: 14px;
}

section.comment-section .comment-container .comment-textarea textarea:hover {
  border-color: violet;
}

.tool {
  display: flex;
  align-items: center;
}

.tool > * {
  margin-right: 6px;
}

section.comment-section .comment-btn {
  border: 1px dashed #20222a;
  padding: 2px 8px;
  outline: none;
  background: 0;
  border-radius: 4px;
}

section.comment-section .comment-btn.dark {
  color: #ffffff;
}

section.comment-section .comment-btn:hover {
  border: 1px solid #149708;
  color: #149708;
}

section.comment-section textarea::-webkit-scrollbar {
  width: 5px;
  border-radius: 6px;
  background-color: rgba(206, 191, 191, 0.3);
}
section.comment-section textarea::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  background-color: rgba(0, 0, 0, 0.3)
}
</style>