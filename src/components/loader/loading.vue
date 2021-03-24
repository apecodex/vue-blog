<template>
  <div class="loading">
    <ul class="loading-ul">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script setup>
</script>

<style>

  .loading {
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0,0,0,.8);
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ul.loading-ul {
    position: relative;
    display: flex;
    height: 200px;
    color: #ffffff;
  }

  ul.loading-ul::after{
    content: 'Loading...';
    position: absolute;
    left: 50%;
    font-weight: 700;
    font-size: 50px;
    transform: translate(-50%, -300%);
  }

  ul.loading-ul li {
    width: 20px;
    height: 20px;
    border-radius: 10px;
    margin: 0 10px;
  }

  ul.loading-ul li:nth-child(1) {
    background-color: red;
    animation: love1 5s 0s infinite;
  }
  ul.loading-ul li:nth-child(2) {
    background-color: darkturquoise;
    animation: love2 5s 0.2s infinite;
  }
  ul.loading-ul li:nth-child(3) {
    background-color: darksalmon;
    animation: love3 5s 0.4s infinite;
  }
  ul.loading-ul li:nth-child(4) {
    background-color: deeppink;
    animation: love4 5s 0.6s infinite;
  }
  ul.loading-ul li:nth-child(5) {
    background-color: yellow;
    animation: love5 5s 0.8s infinite;
  }
  ul.loading-ul li:nth-child(6) {
    background-color: deeppink;
    animation: love4 5s 1s infinite;
  }
  ul.loading-ul li:nth-child(7) {
    background-color: darksalmon;
    animation: love3 5s 1.2s infinite;
  }
  ul.loading-ul li:nth-child(8) {
    background-color: darkturquoise;
    animation: love2 5s 1.4s infinite;
  }
  ul.loading-ul li:nth-child(9) {
    background-color: red;
    animation: love1 5s 1.6s infinite;
  }

  @keyframes love1 {
    30%, 50% {
      height: 60px;
      transform: translateY(-30px);
    }
    70%, 100% {
      height: 20px;
      transform: translateY(0);
    }
  }

  @keyframes love2 {
    30%, 50% {
      height: 125px;
      transform: translateY(-60px);
    }
    70%, 100% {
      height: 20px;
      transform: translateY(0);
    }
  }

  @keyframes love3 {
    30%, 50% {
      height: 160px;
      transform: translateY(-75px);
    }
    70%, 100% {
      height: 20px;
      transform: translateY(0);
    }
  }

  @keyframes love4 {
    30%, 50% {
      height: 180px;
      transform: translateY(-60px);
    }
    70%, 100% {
      height: 20px;
      transform: translateY(0);
    }
  }

  @keyframes love5 {
    30%, 50% {
      height: 200px;
      transform: translateY(-45px);
    }
    70%, 100% {
      height: 20px;
      transform: translateY(0);
    }
  }

  @media screen and (max-width: 786px) {
    ul.loading-ul {
      margin-top: 200px;
    }
  }
</style>