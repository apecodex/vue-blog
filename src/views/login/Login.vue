<template>
  <div class="login-container" ref="container">
    <div class="forms-container">
      <div class="sign-in-sign-up">
        <form action="" class="sign-in-form">
          <h2 class="title">Sign in</h2>
          <div class="input-field">
            <i class="fa fa-user"></i>
            <input type="text" placeholder="Username">
          </div>
          <div class="input-field">
            <i class="fa fa-lock"></i>
            <input type="password" placeholder="Password">
          </div>
          <input type="submit" value="login" class="btn solid">
          <p class="social-text">Or Sign in with social platforms</p>
          <div class="social-media">
            <a href="#" class="social-icon">
              <i class="fa fa-facebook-f"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fa fa-google"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fa fa-linkedin"></i>
            </a>
          </div>
        </form>

        <form action="" class="sign-up-form">
          <h2 class="title">Sign up</h2>
          <div class="input-field">
            <i class="fa fa-user"></i>
            <input type="text" placeholder="Username">
          </div>
          <div class="input-field">
            <i class="fa fa-envelope"></i>
            <input type="text" placeholder="Email">
          </div>
          <div class="input-field">
            <i class="fa fa-lock"></i>
            <input type="password" placeholder="Password">
          </div>
          <input type="submit" value="Sgin up" class="btn solid">
          <p class="social-text">Or Sign up with social platforms</p>
          <div class="social-media">
            <a href="#" class="social-icon">
              <i class="fa fa-facebook-f"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fa fa-google"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fa fa-linkedin"></i>
            </a>
          </div>
        </form>

      </div>
    </div>
    <div class="panels-container">
      <div class="panel left-panel">
        <div class="content">
          <h3>New here?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem beatae commodi cum dolorum et harum id in inventore iure maxime molestiae quis, quos rerum sapiente, sit veniam! Est, ex?</p>
          <button class="btn transparent" id="sign-up-btn" ref="signUpBtn">Sign up</button>
        </div>
        <img src="~assets/svg/login/login.svg" class="image" alt="">
      </div>
      <div class="panel right-panel">
        <div class="content">
          <h3>One of us?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem beatae commodi cum dolorum et harum id in inventore iure maxime molestiae quis, quos rerum sapiente, sit veniam! Est, ex?</p>
          <button class="btn transparent" id="sign-in-btn" ref="signInBtn">Sign in</button>
        </div>
        <img src="~assets/svg/login/register.svg" class="image" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>

  import {ref ,onMounted} from "vue";

  const signUpBtn = ref(null)
  const signInBtn = ref(null)
  const container = ref(null)

  onMounted(() => {
    signUpBtn.value.addEventListener('click', () => {
      container.value.classList.add('sign-up-mode')
    })
    signInBtn.value.addEventListener('click', () => {
      container.value.classList.remove('sign-up-mode')
    })
  })

</script>

<style scoped>
  @import url('assets/css/login/login.css');
</style>