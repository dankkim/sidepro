<template>
  <div>
    <div class="space-y-6">
      <div>
        <label for="" class="block w-16 mb-2 font-semibold">작성자</label>
        <p class="text-gray-500">{{ username }}</p>
      </div>
      <div>
        <label for="" class="block w-16 mb-2 font-semibold">제목</label>
        <input type="text" class="input-style w-full text-gray-500" v-model="title">
      </div>

      <div>
        <div class="block w-16 mb-2 font-semibold">내용</div>
        <div class="text-gray-500">
          <textarea v-model="contents" class="w-full h-32 input-style"></textarea>
          <div v-html="compiledMarkdown" class="contianer prose prose-xl prose-pink mx-auto mt-6"></div>
        </div>
      </div>
    </div>
    <div class="flex justify-between mt-10">
      <div>
        <router-link to="/notice" class="inline-flex items-center px-4 py-2 mr-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white">
          취소
        </router-link>
      </div>
      <div>
        <button @click="saveData()" type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600">
          등록
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {onMounted, ref, watch} from "vue";
import marked from 'marked';
import {setListItem, goList, getListItem, editListItem} from "../api/notice";
export default {
  name: 'EditForm',
  components: {
  },
  props: {
    id: {
      type: String,
      default : ''
    },
  },
  setup(props){
    const title = ref('');
    const username = ref('');
    const contents = ref('');
    const compiledMarkdown = ref('');


    watch(() => contents.value, () => {
      compiledMarkdown.value = marked(contents.value);
    })

    if (props.id !== '') { // Edit 일 때
      getListItem(props.id).then((res) => {
        title.value = res.data.title;
        username.value = res.data.users_permissions_user?.username === undefined ? '비로그인' : res.data.users_permissions_user?.username;
        contents.value = res.data.contents;
      })
    }



    const saveData = () => {
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth() + 1 < 10 ? `0${today.getMonth() + 1}` : `${today.getMonth() + 1}`;
      const date = today.getDate() < 10 ? `0${today.getDate()}` : `${today.getDate()}`;
      const dateForm = `${year}-${month}-${date}`

      const newData = {
        title: title.value,
        contents: contents.value,
        created_at: dateForm,
      }

      if (props.id !== '') { // Edit 일 때
        editListItem(props.id, newData).then(() => {
          goList();
        })
      }  else {
        setListItem(newData).then(() => {
          goList();
        })
      }
    }



    return {
      compiledMarkdown,
      title,
      username,
      contents,
      saveData,
    }
  }
}
</script>
