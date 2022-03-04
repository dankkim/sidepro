<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/signUp">SignUp</router-link> |
    <router-link to="/signIn">SignIn</router-link> |
    <router-link to="/notice">Notice</router-link>
  </div>
  <div>
    <h1 class="text-8xl font-extrabold text-gradient bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-600">
      HOME
    </h1>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
