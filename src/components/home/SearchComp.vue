<template>
  <div class="search-inner box-border-dark">
    <form action="" class="search-form">
      <input type="text" class="search-inp" placeholder="Search">
      <button class="search-btn"><i class="fa fa-search" aria-hidden="true"></i></button>
    </form>
  </div>
</template>

<script setup>

</script>

<style scoped>
  .search-inner .search-form {
    padding: 5px 10px;
    display: flex;
    justify-content: center;
  }

  .search-inner .search-form .search-inp {
    width: 100%;
    height: 30px;
    border: 0;
    outline: none;
    background: transparent;
    color: #fff;
  }

  .search-inner .search-form .search-inp::placeholder {
    color: orangered;
    font-weight: bold;
  }

  .search-inner .search-form .search-btn {
    width: 50px;
    border: 0;
    outline: none;
    background: transparent;
    font-size: 20px;
    border-radius: 8px 14px 14px 8px;
    color: #fff;
    transition: .5s ease-in-out;
  }
</style>