<template>
  <div class="right-content">
    <button>Login</button>
  </div>
</template>

<script setup>
</script>

<style scoped>
  .right-content {
    display: flex;
    align-items: center;
  }
  .right-content button {
    width: 100px;
    height: 40px;
    margin: 0 20px;
    border: 0;
    border-radius: 14px;
    color: #000;
    font-weight: bold;
    outline: none;
    background: rgba(0, 0, 0, .6);
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, .3);
    transition: .5s ease;
  }

  .right-content button{
    flex: 1;
  }

  .right-content button:hover {
    background: #666;
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    .right-content {
      margin-top: 15px;
    }
  }
</style>