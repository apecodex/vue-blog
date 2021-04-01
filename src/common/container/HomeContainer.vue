<template>
  <div class="home-left-container">
    <slot name="notice"/>
    <div class="article-container">
      <slot name="article"/>
    </div>
    <div class="pagination">
    </div>
  </div>
  <div class="home-right-conatiner">
    <div class="search-container">
      <slot name="search"/>
    </div>
    <div class="user-container">
      <slot name="user"/>
    </div>
    <div class="information-container">
      <slot name="information"/>
    </div>
    <div class="new-comments">
      <slot name="comments"/>
    </div>
    <div class="hot-article-container">
      <slot name="hotArticle"/>
    </div>
    <div class="hot-tags-container">
      <slot name="hotTags"/>
    </div>
    <div class="friend-link-container">
      <slot name="friendLink"/>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
  @import url('assets/css/home/homeContainer.css');

  @media screen and (max-width: 768px) { 
  .new-comments {
    display: none;
  }
}
</style>