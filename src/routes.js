import Index from '@/pages/index.vue';
import Inflori from './pages/inflori.vue'
import Lentes from './pages/lentes.vue'

export const routes = [
  { path: '/', component: Index },
  { path: '/inflori', component: Inflori },
  { path: '/lentes', component: Lentes },
];

export default routes;
