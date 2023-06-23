import { createWebHashHistory, createRouter } from 'vue-router';
import AboutView from '../views/AboutView.vue';
import TodoView from '../views/TodoView.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TodoView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
  ],
});

export default router;
