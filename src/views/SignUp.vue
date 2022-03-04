<template>
  <div id="signUp">
    
    <div class="flex justify-center mt-20 mb-12">
      <h1 class="text-4xl font-extrabold text-gradient bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-600 ">
        SIGN UP
      </h1>
    </div>
    <form action="">
      <div class="space-y-5 px-7">
        <div>
          <label class="block mb-1 font-semibold" for="id">아이디</label>
          <input id="id" class="input-style w-full h-12" type="text">
          <p class="text-indigo-600 mt-2">특수문자, 한글, 영문 혼합 불가능, 대문자 불가능</p>
        </div>
        <div>
          <label class="block mb-1 font-semibold" for="password">비밀번호</label>
          <input id="password" class="input-style w-full h-12" type="password">
        </div>
        <div>
          <label class="block mb-1 font-semibold" for="password2">비밀번호 확인</label>
          <input id="password2" class="input-style w-full h-12" type="password">
          <p class="text-indigo-600 mt-2">비밀번호가 동일하지 않습니다.</p>
        </div>
      </div>

      <div class="mt-12 px-7">
        <button type="button" class="w-full bg-indigo-500 text-white py-4 rounded">
          <span class="text-lg">회원가입</span>
        </button>
      </div>
    </form>

    
  </div>
</template>

<script>

export default {
  name: 'SignUp',
  components: {
  }
}
</script>
