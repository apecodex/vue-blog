<template>
  <section class="web-site-container">
    <!--网站名-->
    <website-name/>
    <!--作者名-->
    <website-author/>
    <!--描述-->
    <website-desc/>
    <!--头像-->
    <website-avatar/>
    <!--个人链接-->
    <website-link/>
  </section>
</template>

<script setup>
  import WebsiteName from 'views/admin/setting/website/WebsiteName.vue'
  import WebsiteAuthor from 'views/admin/setting/website/WebsiteAuthor.vue'
  import WebsiteDesc from 'views/admin/setting/website/WebsiteDesc.vue'
  import WebsiteAvatar from 'views/admin/setting/website/WebsiteAvatar.vue'
  import WebsiteLink from 'views/admin/setting/website/WebsiteLink.vue'
</script>

<style scoped>
  .web-site-container {
    overflow-x: auto;
  }
</style>