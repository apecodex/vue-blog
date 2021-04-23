<template>
  <transition name="fade">
    <loading v-if="isLoading"></loading>
  </transition>
  <message-container>
    <template #leftContent>
      <message-left-content>
        <template #comment>
          <message-user-info head="https://i.loli.net/2021/03/12/xCdGnVRzkl8Kqwc.jpg" username="apecode"/>
            <comment action="" rows="4" btnText="留言" :onSubmit="onSubmit"></comment>
          <div class="message-tips">这里是留言板块，有任何问题，都可以在这里说明，我会及时回复的哦~</div>
        </template>
      </message-left-content>
    </template>
    <template #rightContent>
      <message-right-content>
        <template #messageShow>
          <comment-show :dark="false"/>
        </template>
      </message-right-content>
    </template>
  </message-container>
</template>

<script setup>
  import MessageContainer from 'components/message/MessageContainer.vue'
  import MessageLeftContent from 'components/message/MessageLeftContent.vue' // 左边内容
  import MessageUserInfo from 'components/message/childrens/MessageUserInfo.vue'  // 用户头像及名字

  import MessageRightContent from 'components/message/MessageRightContent.vue' // 右侧留言展示

  import loading from 'components/loader/loading.vue'

  import {onBeforeMount, onMounted, reactive, ref} from "vue";

  // 加载loader...
  const isLoading = ref(true)

  const userinfo = ref({})

  onMounted(() => {
    isLoading.value = !isLoading.value
  })

  const onSubmit = (e, a) => {
    console.log("do some");
    console.log(a);

    e.preventDefault()
  }

</script>

<style scoped>
  .message-tips {
    margin-top: 20px;
    font-size: 22px;
    font-weight: bold;
    color: #6e0832;
  }
</style>

<style>
.comment-show-container .comment-show-content {
  padding: 0!important;
}
</style>