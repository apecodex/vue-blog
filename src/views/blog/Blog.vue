<template>
  <blog-container>
    <template #header>
      <navigation logo="apecode">
        <template #nav-menu-item>
          <navigation-item path='/home' itemIcon="fa fa-home home" itemText="Home"/>
          <navigation-item path="/archive" itemIcon="fa fa-archive archive" itemText="Archive"/>
          <navigation-item path="/category" itemIcon="fa fa-th-list category" itemText="category"/>
          <navigation-item path="/tags" itemIcon="fa fa-tags tags" itemText="Tags"/>
          <navigation-item path="/message" itemIcon="fa fa-comments message" itemText="message"/>
          <navigation-item path='/about' itemIcon="fa fa-male about" itemText="about"/>
        </template>
      </navigation>
    </template>
    <template #main>
      <div class="main-container">
        <router-view></router-view>
      </div>
    </template>
    <template #footer>
      <div class="fonter-container">
        sdsd
      </div>
    </template>
  </blog-container>
</template>

<script setup>
  import BlogContainer from 'common/container/BlogContainer.vue'
  import Navigation from 'components/navigation/Navigation.vue'
  import NavigationItem from 'components/navigation/NavigationItem.vue'

</script>

<style>

</style>