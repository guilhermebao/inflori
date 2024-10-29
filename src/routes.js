import Index from '@/pages/index.vue';
import Inflori from './pages/inflori.vue';
import Lentes from './pages/lentes.vue';
import Cliente from './pages/cliente.vue';
import Endodontico from './pages/endodontico.vue';
import Ortodontia from './pages/ortodontia.vue';

export const routes = [
  { path: '/', component: Index },
  { path: '/inflori', component: Inflori },
  { path: '/lentes', component: Lentes },
  { path: '/cliente', component: Cliente },
  { path: '/endodontico', component: Endodontico },
  { path: '/ortodontia', component: Ortodontia },
];

export default routes;