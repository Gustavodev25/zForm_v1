import { createRouter, createWebHistory } from 'vue-router';

import HelloWorld from './components/HelloWorld.vue';
import CasdastroTela from './components/CasdastroTela.vue';
import LoginTela from './components/LoginTela.vue';
import DashboardTela from './components/DashboardTela.vue';
import CadastroProduto from './components/CadastroProduto.vue';
import CadastroCliente from './components/CadastroCliente.vue';
import EstoqueTela from './components/EstoqueTela.vue';

const routes = [
  {
    path: '/', 
    component: HelloWorld, 
    name: 'HelloWorld', 
  },
  {
    path: '/cadsatro', 
    component: CasdastroTela, 
    name: 'CasdastroTela', 
  },
  {
    path: '/login', 
    component: LoginTela, 
    name: 'LoginTela', 
  },
  {
    path: '/dashboard', 
    component: DashboardTela, 
    name: 'DashboardTela', 
  },
  {
    path: '/produtos', 
    component: CadastroProduto, 
    name: 'CadastroProduto', 
  },
  {
    path: '/clientes', 
    component: CadastroCliente, 
    name: 'CadastroCliente', 
  },
  {
    path: '/estoque', 
    component: EstoqueTela, 
    name: 'EstoqueTela', 
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;