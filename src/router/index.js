import { createRouter, createWebHistory } from 'vue-router'
import Notice from '@/views/notice/Notice.vue'
import NoticeList from '@/views/notice/List.vue'
import NoticeView from '@/views/notice/View.vue'
import NoticeWrite from '@/views/notice/Write.vue'
import NoticeEdit from '@/views/notice/Edit.vue'

const routes = [
  {
    path: '/',
    name: 'signIn',
    component: () => import('../views/SignIn.vue'),
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: () => import('../views/SignUp.vue')
  },

  {
    path: '/notice',
    name: 'notice',
    component: Notice,
    children: [
      {
        path: '',
        component: NoticeList,
      },
      {
        path: ':id',
        component: NoticeView,
        props: true
      },
      {
        path: 'write',
        component: NoticeWrite,
      },
      {
        path: ':id/edit',
        component: NoticeEdit,
        props: true
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
