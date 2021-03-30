<template>
  <section>
    <div class="post-support">
      <p>如果这篇文章对你有用，支持一下呗！</p>
      <button @click.stop="openErweima">打赏</button>
      <div class="post-erweima" v-show="erweimaShow"  ref="showPanel">
        <img src="~assets/img/wechat.png" alt="">
        <img src="~assets/img/alipay.png" alt="">
      </div>
    </div>
    <div class="post-copyright">
      <p class="copyright-author"><span>本文作者：</span><span class="author-text">apecode</span></p>
      <p class="copyright-link"><span>本文链接：</span><a :href="`https://apecodewx.cn${$route.path}`">{{ `https://apecodewx.cn${$route.path}` }}</a></p>
      <p class="copyright-statement"><span>版权声明：</span>本博客所有文章除特别声明外，均采用 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0</a> 许可协议。转载请注明出处！</p>
    </div>
  </section>
</template>

<script setup>
import {nextTick, onBeforeUnmount, onMounted, ref} from "vue";

  const erweimaShow = ref(false)
  const showPanel = ref(null)

  const openErweima = () => {
    erweimaShow.value = !erweimaShow.value
  }

  // 点击其他地方关闭二维码窗口
  onMounted(() => {
    nextTick(() => {
      document.addEventListener('click', closeErweimaBox)
    })
  })

  const closeErweimaBox = () => {
    if(showPanel.value){
      if(erweimaShow.value){
        erweimaShow.value = false
      }
    }
  }

  onBeforeUnmount(() => {
    window.removeEventListener("click", closeErweimaBox);
  })
</script>

<style>
  .post-support {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
  }
  .post-support > p {
    font-size: 18px;
    font-weight: 500;
  }

  .post-support > button {
    margin-top: 10px;
    padding: 5px 25px;
    border: 0;
    background: crimson;
    color: #ffffff;
    border-radius: 4px;
    outline: none;
  }

  .post-support > button:hover {
    background: #2f3640;
  }

  .post-support .post-erweima {
    position: absolute;
    top: -145px;
    display: flex;
    height: 130px;
    width: 260px;
    justify-content: space-between;
    background: rgba(0,0,0,.6);
    padding: 5px;
    border-radius: 4px;
    animation: erweima-move 1s;
  }
  .post-support .post-erweima img {
    height: 100%;
  }
  .post-support .post-erweima:after {
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
    content: '';
    width: 25px;
    height: 25px;
    border-top: 15px solid rgba(0,0,0,.6);
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 10px solid transparent;
    z-index: -1;
  }

  /* 版权 */
  .post-copyright {
    margin-top: 20px;
    border-left: 4px solid rgb(135, 67, 210);
    padding: 5px 15px;
    background: rgba(0,0,0,.03);
  }

  .post-copyright > p {
    margin: 10px 0;
    font-weight: 500;
  }

  .post-copyright p > span {
    font-weight: bolder;
  }

  .post-copyright p.copyright-author span.author-text {
    color: tomato;
  }

  .post-copyright p.copyright-link a {
    padding-bottom: 2px;
    color: darkred;
    border-bottom: 1px dashed darkred;
    font-weight: bolder;
  }

  .post-copyright p.copyright-statement a {
    font-weight: bolder;
    color: indigo;

  }

  @keyframes erweima-move {
    from {
      top: 0;
    }
    to {
      top: -145px;
    }
  }
</style>