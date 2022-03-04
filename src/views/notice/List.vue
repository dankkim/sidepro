<template>
  <div>
    <div class="flex justify-end mb-5">
      <router-link to="/notice/write" class="inline-flex items-center px-4 py-2 mr-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white">
        글쓰기
      </router-link>
    </div>
    <ul class="space-y-7" v-if="isLoading">
      <li v-for="n in 3">
        <div class="block shadow border overflow-hidden border-b border-gray-200 sm:rounded-lg rounded p-5">
          <span class="text-sm inline-block w-6"><SkeletonBox/></span>
          <h2 class="text-xl sm:text-3xl"><SkeletonBox/><SkeletonBox/></h2>
          <div class="mt-2 flex items-center text-sm justify-end">
            <span class="mr-5 inline-block w-14"><SkeletonBox/></span>
            <span class="inline-block w-14"><SkeletonBox/></span>
          </div>
        </div>
      </li>
    </ul>
    <ul class="space-y-7">
      <li v-for="(item, index) of noticeList">
        <router-link :to="`/notice/${item.id}`" class="block shadow border overflow-hidden border-b border-gray-200 sm:rounded-lg rounded p-5">
          <span class="text-sm font-semibold text-indigo-500">{{ listNum(index) }}</span>
          <h2 class="text-xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">{{ item.title }}</h2>
          <div class="mt-2 flex items-center text-sm text-gray-500 justify-end">
            <span class="mr-5">{{ item.users_permissions_user?.username }}</span>
            <span>{{ item.created_at }}</span>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {onMounted, ref, toRefs, reactive, computed, watch} from 'vue';
import {getList} from "../../api/notice";
import SkeletonBox from '@/components/SkeletonBox';

export default {
  name: 'NoticeList',
  components: {
    SkeletonBox
  },
  setup(){
    const isLoading = ref(true);
    const noticeList = ref([]);

    const listNum = (index) => {
      return (index+1) < 10 ? `0${index+1}` : index+1;
    }

    getList()
        .then((res) => {
          noticeList.value = res.data.map((item) => {
            const createdAt = item.created_at || item.createdAt;
            item.created_at = createdAt.substring(0, 10);
            return item
          })

          noticeList.value.reverse();

          isLoading.value = false;

        })

    onMounted(() => {

    })

    return {
      isLoading,
      noticeList,
      listNum,
    }
  }

}
</script>
