<template>

    <html>
        <link rel="stylesheet" href="/css/dashboard.css">   
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

      <div class="cards-line">

        <div class="cards">  
          <div class="top-cards">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-users" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
              <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
            </svg>
            <p>Total de Clientes</p>
          </div>
          <div class="body-cards">
            <h1>{{ totalClientes }}</h1>
          </div>
        </div>

        <div class="cards">  
          <div class="top-cards">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 17h-11v-14h-2" />
              <path d="M6 5l14 1l-1 7h-13" />
            </svg>
            <p>Total de Produtos</p>
          </div>
          <div class="body-cards">
            <h1>{{ totalProdutos }}</h1>
          </div>
        </div>

        <div class="cards">  
          <div class="top-cards">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-report" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M17 17m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
              <path d="M17 13v4h4" />
              <path d="M12 3v4a1 1 0 0 0 1 1h4" />
              <path d="M11.5 21h-6.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v2m0 3v4" />
            </svg>
            <p>Formularios</p>
          </div>
          <div class="body-cards">
            <h1>{{ totalFormularios }}</h1>
          </div>
        </div>

        <div class="cards">  
          <div class="top-cards">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-coin" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
              <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1" />
              <path d="M12 7v10" />
            </svg>
            <p>Faturamento Total</p>
          </div>
          <div class="body-cards">
            <h1>R${{ totalCaixa }}</h1>
          </div>
        </div>

        <div class="cards">  
          <div class="top-cards">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-package" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" />
              <path d="M12 12l8 -4.5" />
              <path d="M12 12l0 9" />
              <path d="M12 12l-8 -4.5" />
              <path d="M16 5.25l-8 4.5" />
            </svg>
            <p>Total em Estoque</p>
          </div>
          <div class="body-cards">
            <h1>{{ totalEstoque }}</h1>
          </div>
        </div>
      </div>

      <div class="tabela-container">
        <h1>Log's</h1>
        <div class="log-table">
          <table>
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Cidade</th>
                <th>Produto</th>
                <th>Quantidade</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              <!-- Use v-for para exibir logs com base na página atual -->
              <tr v-for="(log, index) in displayedLogs" :key="index">
                <td>{{ log.cliente }}</td>
                <td>{{ log.cidade }}</td>
                <td>{{ log.produto }}</td>
                <td>{{ log.quantidade }}</td>
                <td>{{ log.data }}</td>
              </tr>
            </tbody>
          </table>
          <div class="arrow-div">
            <div class="pagination">
              <button @click="previousPage" :disabled="currentPage === 1"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-left" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M5 12l14 0" />
                <path d="M5 12l4 4" />
                <path d="M5 12l4 -4" />
              </svg></button>
              <button @click="nextPage" :disabled="currentPage === totalPages"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-right" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M5 12l14 0" />
                <path d="M15 16l4 -4" />
                <path d="M15 8l4 4" />
              </svg></button>
            </div>
          </div>
        </div>
      </div>


      <div class="grafico-background">
        <h1>Faturamentos Mensais</h1>
        <div class="grapich-container">
          <canvas height="400" width="400" ref="monthlyRevenueChart"></canvas>
        </div>
      </div>

      
    </section>

  </div>

</template>


<script>
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, get } from 'firebase/database';
import Chart from 'chart.js/auto';

export default {
  data() {
    return {
      user: null,
      userName: null,
      isSidebarMinimized: false,
      totalClientes: 0,
      totalProdutos: 0,
      totalFormularios: 0,
      totalCaixa: 0,
      totalEstoque: 0,
      logs: [], 
      logsPerPage: 10, 
      currentPage: 1,
      monthNames: {
        '01': 'Janeiro',
        '02': 'Fevereiro',
        '03': 'Março',
        '04': 'Abril',
        '05': 'Maio',
        '06': 'Junho',
        '07': 'Julho',
        '08': 'Agosto',
        '09': 'Setembro',
        '10': 'Outubro',
        '11': 'Novembro',
        '12': 'Dezembro',
      },
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.logs.length / this.logsPerPage);
    },
    displayedLogs() {
      const startIndex = (this.currentPage - 1) * this.logsPerPage;
      const endIndex = startIndex + this.logsPerPage;
      return this.logs.slice(startIndex, endIndex);
    },
  },
  methods: {
    toggleSidebar() {
      this.isSidebarMinimized = !this.isSidebarMinimized;
    },
    enviarPedido(pedido) {
      const log = {
        data: new Date().toLocaleString(),
        cliente: pedido.cliente,
        cidade: pedido.cidade,
        produto: pedido.produto,
        quantidade: pedido.quantidade,
        dataEnvio: pedido.dataEnvio,
        valorTotal: pedido.valorTotal,
      };
      this.logs.push(log);
      this.calculateMonthlyRevenue();
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    calculateMonthlyRevenue() {
      const monthlyRevenue = {};

      this.logs.forEach((log) => {
        const dateParts = log.dataEnvio.split('/');
        const month = dateParts[1];
        const revenue = parseFloat(log.valorTotal) || 0;

        if (!monthlyRevenue[month]) {
          monthlyRevenue[month] = 0;
        }

        monthlyRevenue[month] += revenue;
      });

      this.monthlyRevenueData = monthlyRevenue;

      this.updateChart();
    },
    updateChart() {
      const chartData = {
        labels: Object.keys(this.monthlyRevenueData).map(month => this.monthNames[month]),
        datasets: [
          {
            label: 'Faturamento Mensal',
            backgroundColor: '#186f65bb',
            borderColor: '#186f65bb',
            borderWidth: 1,
            data: Object.values(this.monthlyRevenueData),
          },
        ],
      };

      const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
      };

      const canvas = this.$refs.monthlyRevenueChart;
      const ctx = canvas.getContext('2d');

      if (this.monthlyRevenueChart) {
        this.monthlyRevenueChart.destroy();
      }

      this.monthlyRevenueChart = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: chartOptions,
      });
    },
  },
  created() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
        const db = getDatabase();
        const userRef = ref(db, 'usuarios/' + user.uid + '/nome');
        get(userRef)
          .then((snapshot) => {
            if (snapshot.exists()) {
              this.userName = snapshot.val();
            } else {
              this.userName = 'Nome Desconhecido';
            }
          })
          .catch((error) => {
            console.error('Erro ao buscar o nome do usuário:', error);
          });
        const clientesRef = ref(db, 'clientes');
        get(clientesRef)
          .then((snapshot) => {
            if (snapshot.exists()) {
              const clientes = snapshot.val();
              this.totalClientes = Object.keys(clientes).length;
            }
          })
          .catch((error) => {
            console.error('Erro ao buscar clientes:', error);
          });
        const produtosRef = ref(db, 'produtos');
        get(produtosRef)
          .then((snapshot) => {
            if (snapshot.exists()) {
              const produtos = snapshot.val();
              this.totalProdutos = Object.keys(produtos).length;
              let totalEstoque = 0;
              for (const produto of Object.values(produtos)) {
                totalEstoque += parseInt(produto.quantidade, 10);
              }
              this.totalEstoque = totalEstoque;
            }
          })
          .catch((error) => {
            console.error('Erro ao buscar produtos:', error);
          });
        const formulariosRef = ref(db, 'pedidos');
        get(formulariosRef)
          .then((snapshot) => {
            if (snapshot.exists()) {
              const formularios = snapshot.val();
              this.totalFormularios = Object.keys(formularios).length;
            }
          })
          .catch((error) => {
            console.error('Erro ao buscar formulários:', error);
          });
        const pedidosRef = ref(db, 'pedidos');
        get(pedidosRef)
          .then((snapshot) => {
            if (snapshot.exists()) {
              let totalCaixa = 0;
              snapshot.forEach((pedidoSnapshot) => {
                const pedidoData = pedidoSnapshot.val();
                if (pedidoData && pedidoData.valorTotal) {
                  totalCaixa += parseFloat(pedidoData.valorTotal);
                  this.enviarPedido(pedidoData);
                }
              });
              console.log('Total do Caixa:', totalCaixa);
              this.totalCaixa = totalCaixa;
            }
          })
          .catch((error) => {
            console.error('Erro ao buscar pedidos:', error);
          });
      } else {
        this.user = null;
        this.userName = null;
      }
    });
  },
};
</script>
