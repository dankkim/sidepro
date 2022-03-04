import { createStore } from 'vuex'

export default createStore({
  state: {
    allUsers : [
      { id:1, name:"greeda", email:"silent2939@gmail.com", password:"12345" }
    ],
    isLogin: false,
    isLoginError: false,
    isPassError: false
  },
  mutations: {
    //로그인 성공
    loginSuccess(state) {
      state.isLogin = true
      state.isLoginError = false
      state.isPassError = false
      console.log("완료")
    },
    //로그인 실패
    loginError(state) {
      state.isLogin = false
      state.isLoginError = true
      state.isPassError = false
      const p = document.querySelector('#id + p')
      p.innerHTML = "이메일 아이디가 없습니다."
    },
    //비밀번호 실패
    passError(state) {
      state.isLogin = false
      state.isLoginError = false
      state.isPassError = true

      const p = document.querySelector('#password + p')
      p.innerHTML = "비밀번호가 다릅니다."
    }
  },
  actions: {
    //로그인 시도
    login({state, commit}, loginObj) {
      let selectedUser = null

      state.allUsers.forEach(user => {
        if(user.email === loginObj.email) selectedUser = user
      })

      if(selectedUser === null) {
        commit("loginError")
      } else {
        if(selectedUser.password !== loginObj.password) {
          commit("passError")
        } else {
          commit("loginSuccess")
        }
      }

    }
  },
  modules: {
  }
})
