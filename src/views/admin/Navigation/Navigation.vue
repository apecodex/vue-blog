<template>
  <ul>
    <li>
      <div>
        <span class="icon"><i class="fa fa-heartbeat" aria-hidden="true"></i></span>
        <span class="title"><h2>Hi,Admin</h2></span>
      </div>
    </li>
    <slot name="li"/>
  </ul>
</template>

<script setup>
</script>

<style scoped>
  @import url('assets/css/admin/navigation/navigation.css');
</style>