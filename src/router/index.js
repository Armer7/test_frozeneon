import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      layout: 'main',
    },
    component: () => import('@/pages/MainPage.vue'),
  },
  {
    path: '*',
    name: 'notFound',
    meta: {
      layout: 'main',
    },
    component: () => import('@/pages/404'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
