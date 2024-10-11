import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import RiskEdit from '@/views/RiskEdit.vue';
import RiskView from '@/views/RiskView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/risk/:id',
      children: [
        {
          path: '',
          name: 'risk',
          component: RiskView,
        },
        {
          path: 'edit',
          component: RiskEdit,
        },
      ],
    },
    {
      path: '/risk/add',
      name: 'risk-add',
      component: () => import('@/views/RiskAdd.vue'),
    },
  ],
});

export default router;
