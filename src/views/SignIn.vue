<template>
  <div id="signIn">

    <div class="flex justify-center mt-20 mb-12">
      <h1 class="text-4xl font-extrabold text-gradient bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-600 ">
        SIGN IN
      </h1>
    </div>
    <form action="">
      <div class="space-y-5 px-7">
        <div>
          <label class="block mb-1 font-semibold" for="id" >이메일 아이디</label>
          <input id="id" class="input-style w-full h-12" type="text" placeholder="" v-model="email">
          <p class="text-indigo-600 mt-2" :value="isLoginError"></p>
        </div>
        <div>
          <label class="block mb-1 font-semibold" for="password">비밀번호</label>
          <input id="password" class="input-style w-full h-12" type="password" placeholder="" v-model="password">
          <p class="text-indigo-600 mt-2" :value="isPassError">{{ }}</p>
        </div>
      </div>

      <div class="mt-12 px-7 text-center">
        <button class="w-full bg-indigo-500 text-white py-4 rounded mb-5" type="button" @click="login({email, password})">
          <span class="text-lg">로그인</span>
        </button>
        <router-link to="/signUp" class="inline-block underline">
          <span>회원가입</span>
        </router-link>
      </div>
    </form>


  </div>
</template>

<script>
// import axios from 'axios'
import {mapState, mapActions } from "vuex"

export default {
  name: 'SignIn',
  data() {
    return {
      email: null,
      password: null
    }
  },
  computed: {
    ...mapState(["isLogin", "isLoginError", "isPassError"])
  },
  methods: {
    ...mapActions(["login"])
  }
}
</script>
