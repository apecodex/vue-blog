<template>
  <transition name="fade">
    <loading v-if="isLoading"></loading>
  </transition>
  <h1>Nav</h1>
  <div
      v-for="anchor in titles"
      :style="{ padding: `10px 0 10px ${anchor.indent * 20}px` }"
      @click.prevent="handleAnchorClick(anchor)"
  >
    <a style="cursor: pointer">{{ anchor.title }}</a>
  </div>
  <v-md-editor v-model="text" mode="preview" ref="editor"></v-md-editor>
</template>

<script setup>
  import loading from 'components/loader/loading.vue'

  // 加载loader...
  import {onMounted, ref, nextTick} from "vue";

  const isLoading = ref(true)

  const editor = ref(null)
  const titles = ref([])

  onMounted(() => {
    const anchors = editor.value.$el.querySelectorAll('.v-md-editor-preview h1,h2,h3,h4,h5,h6');
    titles.value = Array.from(anchors).filter((title) => !!title.innerText.trim());
    if (!titles.value.length) {
      titles.value = [];
      return;
    }

    const hTags = Array.from(new Set(titles.value.map((title) => title.tagName))).sort();

    titles.value = titles.value.map((el) => ({
      title: el.innerText,
      lineIndex: el.getAttribute('data-v-md-line'),
      indent: hTags.indexOf(el.tagName),
    }));
    isLoading.value = !isLoading.value;
  })

  const handleAnchorClick = (anchor) => {
    const {lineIndex} = anchor;

    const heading = editor.value.$el.querySelector(
        `.v-md-editor-preview [data-v-md-line="${lineIndex}"]`
    );
    if (heading) {
      editor.value.previewScrollToTarget({
        target: heading,
        scrollContainer: window,
        top: 0,
      })
    }

  }

  const text = ref('`\n' +
      '# heading 1\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      '\n' +
      '## heading 2\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      '\n' +
      '### heading 3\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      '\n' +
      '## heading 2\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      '\n' +
      '### heading 3\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      '`')

  // const save = (text, html) => {
  //   console.log(text, html)
  // }
</script>

<style>

</style>