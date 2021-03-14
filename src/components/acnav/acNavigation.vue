<template>
  <div class="nav-content box-border-white">
    <slot name="content"/>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  @import url('assets/css/common/common.css');
  .nav-content {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 30px;
  }

</style>