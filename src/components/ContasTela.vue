<template>

    <html>
        <link rel="stylesheet" href="/css/contas.css">   
    </html>
    

    <div class="containerdashboard">

      
    <div :class="['sidebar', { 'sidebar-minimized': isSidebarMinimized }]">
      <div class="top-sidebar">
        <h1 v-if="!isSidebarMinimized">zForm</h1>
        <div class="menu-sidebar" @click="toggleSidebar">
          <svg
            v-if="isSidebarMinimized"
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-menu-2"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="#ffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-menu-2"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="#ffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </div>
      </div>

      <div class="body-sidebar">

        <nav>
          <ul>
            <li>
              <router-link to="/dashboard" href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-dashboard"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 13m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M13.45 11.55l2.05 -2.05" />
                  <path d="M6.4 20a9 9 0 1 1 11.2 0z" />
                </svg>
                <span v-if="!isSidebarMinimized">Dashboard</span>
              </router-link>
            </li>
            <li>
              <router-link to="/produtos" href="">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-basket" width="26" height="26" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                  <path d="M5.001 8h13.999a2 2 0 0 1 1.977 2.304l-1.255 7.152a3 3 0 0 1 -2.966 2.544h-9.512a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304z" />
                  <path d="M17 10l-2 -6" />
                  <path d="M7 10l2 -6" />
                </svg>
                <span v-if="!isSidebarMinimized">Produtos</span>
              </router-link>
            </li>
            <li>
              <router-link to="/clientes" href="">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-users" width="26" height="26" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                </svg>
                <span v-if="!isSidebarMinimized">Clientes</span>
              </router-link>
            </li>
            <li>
              <router-link to="/estoque" href="">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-box-seam" width="26" height="26" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M12 3l8 4.5v9l-8 4.5l-8 -4.5v-9l8 -4.5" />
                  <path d="M12 12l8 -4.5" />
                  <path d="M8.2 9.8l7.6 -4.6" />
                  <path d="M12 12v9" />
                  <path d="M12 12l-8 -4.5" />
                </svg>
                <span v-if="!isSidebarMinimized">Estoque</span>
              </router-link>
            </li>
          </ul>
        </nav>


        </div>
    </div>

    <section class="mainsection">

      <div class="top-section">
        
        <div class="titlee">
          <h1>Contas</h1>
        </div>

      </div>

      <div>
        <h2>Ganhos do Dia</h2>
        <p>Valor Total dos Pedidos do Dia: R$ {{ dailyTotal }}</p>
        <p>Ganhos do Pai: R$ {{ fatherEarnings }}</p>
        <p>Ganhos do Irmão: R$ {{ brotherEarnings }}</p>

        <h2>Pedidos do Dia</h2>
        <ul>
          <li v-for="(order, index) in orders" :key="index">
            <p><strong>Cliente:</strong> {{ order.cliente }}</p>
            <p><strong>Produto:</strong> {{ order.produto }}</p>
            <p><strong>Quantidade:</strong> {{ order.quantidade }}</p>
            <p><strong>Valor Total:</strong> R$ {{ order.valorTotal }}</p>
          </li>
        </ul>
      </div>


    </section>

  </div>

</template>


<script>
import { getDatabase, ref, get } from 'firebase/database';

export default {
  data() {
    return {
      orders: [],
      dailyTotal: 0,
      fatherEarnings: 0,
      brotherEarnings: 0,
    };
  },
  methods: {
    async fetchOrders() {
      const db = getDatabase();
      const ordersRef = ref(db, 'pedidos'); // Substitua pelo caminho real do seu banco de dados

      try {
        const snapshot = await get(ordersRef);
        if (snapshot.exists()) {
          const allOrders = snapshot.val();
          const today = new Date().toLocaleDateString('pt-BR'); // Data atual no formato dd/mm/yyyy

          // Filtrar os pedidos que têm a data de envio igual a hoje
          this.orders = Object.values(allOrders).filter((order) => order.dataEnvio === today);

          // Calcular o valor total dos pedidos
          this.dailyTotal = this.orders.reduce((total, order) => total + Number(order.valorTotal), 0);

          // Distribuir os ganhos para o pai e o irmão (ou qualquer outra lógica que você desejar)
          // Aqui estamos dividindo igualmente
          this.fatherEarnings = this.dailyTotal / 2;
          this.brotherEarnings = this.dailyTotal / 2;
        } else {
          this.orders = [];
          this.dailyTotal = 0;
          this.fatherEarnings = 0;
          this.brotherEarnings = 0;
        }
      } catch (error) {
        console.error('Erro ao buscar pedidos:', error);
      }
    },
  },
  created() {
    this.fetchOrders(); // Chame a função para buscar os pedidos no carregamento do componente
  },
};
</script>