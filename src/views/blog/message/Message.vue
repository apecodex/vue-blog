<template>
  <message-container>
    <template #leftContent>
      <message-left-content>
        <template #comment>
          <message-user-info head="https://i.loli.net/2021/03/12/xCdGnVRzkl8Kqwc.jpg" username="apecode"/>
          <comment placeholder="说点啥？"
                  actionUrl=""
                  method="get"
                  :submitFunc="submit"
                  btnText="留言"/>
        </template>
      </message-left-content>
    </template>
    <template #rightContent>
      <message-right-content></message-right-content>
    </template>
  </message-container>
</template>

<script setup>
  import MessageContainer from 'components/message/MessageContainer.vue'
  import MessageLeftContent from 'components/message/MessageLeftContent.vue'
  import MessageRightContent from 'components/message/MessageRightContent.vue'

  import MessageUserInfo from 'components/message/MessageUserInfo.vue'

  import Comment from 'common/comment/Comment.vue'
  import Emoji from 'common/comment/Emoji.vue'


  const submit = (e, a) => {
    console.log("do some");
    console.log(a);

    e.preventDefault()
  }

</script>

<style>

</style>