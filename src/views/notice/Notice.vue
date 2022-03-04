<template>
  <div>
    <div class="flex justify-center mt-14 mb-10">
      <router-link to="/notice">
        <h1 class="text-4xl font-extrabold text-gradient bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-600 ">
          NOTICE
        </h1>
      </router-link>
    </div>
    <div class="px-7 pb-14">
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
import {onMounted, ref, toRefs, reactive, computed, watch} from 'vue';
export default {
  name: 'Notice',
  components: {
  },
  setup(){

    return {
    }
  }
}
</script>
