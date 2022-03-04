<template>
  <div>
    <div v-if="isLoading">
      <h2 class="text-xl sm:text-3xl"><SkeletonBox/></h2>
      <h2 class="text-xl sm:text-3xl w-2/3"><SkeletonBox/></h2>
      <div class="mt-2 flex items-center text-sm text-gray-500">
        <span class="mr-5 inline-block w-14"><SkeletonBox/></span>
        <span class="inline-block w-14"><SkeletonBox/></span>
      </div>
      <div class="mt-10">
        <div><SkeletonBox/><SkeletonBox/><SkeletonBox/><SkeletonBox/></div>
        <div class="w-1/3"><SkeletonBox/></div>
      </div>
    </div>
    <h2 class="text-xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">{{ viewItem.title }}</h2>
    <div class="mt-2 flex items-center text-sm text-gray-500">
      <span class="mr-5">{{ viewItem.users_permissions_user?.username }}</span>
      <span>{{ viewItem.created_at }}</span>
    </div>
    <div class="mt-10">
      <div v-html="viewItem.contents" class="contianer prose prose-xl prose-pink mx-auto"></div>
    </div>
    <div class="flex justify-between mt-20">
      <div>
        <router-link :to="`/notice/${viewItem.id}/edit`" class="inline-flex items-center px-4 py-2 mr-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          수정
        </router-link>
        <button @click="deleteItem" type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-red-600">
          삭제
        </button>
      </div>
      <div>
        <router-link  to="/notice" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          목록
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

import {onMounted, ref} from "vue";
import marked from 'marked';
import {getListItem, deleteListItem, goList} from "../../api/notice";
import SkeletonBox from '@/components/SkeletonBox';

export default {
  name: 'NoticeView',
  props: {
    id: {
      type: String,
      default : ''
    },
  },
  components: {
    SkeletonBox
  },
  setup(props){
    const isLoading = ref(true);
    const viewItem = ref({})

    getListItem(props.id).then((res) => {
      viewItem.value = res.data
      isLoading.value = false;

      const createdAt = viewItem.value.created_at || viewItem.value.createdAt;
      viewItem.value.created_at = createdAt.substring(0, 10);
      viewItem.value.contents = marked(viewItem.value.contents)
    })

    const deleteItem = () => {
      deleteListItem(props.id).then(() => {
        goList();
      })
    }

    return {
      isLoading,
      viewItem,
      deleteItem,
    }
  }
}
</script>
