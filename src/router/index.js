import Vue from 'vue';
import VueRouter from 'vue-router';
import PostIndex from '@/views/Post/Index.vue';
import AlbumIndex from '@/views/Album/Index.vue';
import UserIndex from '@/views/User/Index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/users',
  },
  {
    path: '/posts',
    name: 'post-list',
    component: PostIndex,
  },
  {
    path: '/albums',
    name: 'album-list',
    component: AlbumIndex,
  },
  {
    path: '/users',
    name: 'user-list',
    component: UserIndex,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
