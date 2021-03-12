<template>
  <div class="friend-link-content">
    <ul>
      <li class="box-rubber-band">
        <a href="#">apecode</a>
      </li>
      <li class="box-rubber-band">
        <a href="#">apecode的博客</a>
      </li>
      <li class="box-rubber-band">
        <a href="#">apecode</a>
      </li>
      <li class="box-rubber-band">
        <a href="#">apecode</a>
      </li>
      <li class="box-rubber-band">
        <a href="#">apecode</a>
      </li>
      <li class="box-rubber-band">
        <a href="#">apecode</a>
      </li>
      <li class="box-rubber-band">
        <a href="#">apecode</a>
      </li>
      <li class="box-rubber-band">
        <a href="#">apecode</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
</script>

<style scoped>

  .friend-link-content ul {
    display: flex;
    flex-wrap: wrap;
  }

  .friend-link-content ul li {
    padding: 5px 8px;
    margin-left: 8px;
    margin-bottom: 5px;
    background: #333;
    border-radius: 8px;
  }

  .friend-link-content ul li a {
    color: tomato;
    font-weight: 600;
  }

  .friend-link-content ul li:hover {
    background: #555;
  }

  .friend-link-content ul li:hover a {
    color: white;
  }
</style>