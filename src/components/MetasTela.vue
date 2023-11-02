<template>

    <html>
        <link rel="stylesheet" href="/css/metas.css">   
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
          <h1>Metas</h1>
        </div>

        <div class="button-section">
          <button @click="openModal">Criar Meta</button>
        </div>

      </div>

      <div class="modal" v-if="isModalOpen">
        <div class="modal-content">
          <span class="close" @click="closeModal">&times;</span>
          <h2>Criar Nova Meta</h2>
          <form @submit.prevent="saveMeta">
            <label for="metaName">Nome da Meta:</label>
            <input type="text" id="metaName" v-model="metaName" required>
            <label for="startDate">Data de Início:</label>
            <input type="date" id="startDate" v-model="startDate" required>
            <label for="endDate">Data de Término:</label>
            <input type="date" id="endDate" v-model="endDate" required>
            <label for="metaValue">Valor da Meta:</label>
            <input type="number" id="metaValue" v-model="metaValue" required>
            <button type="submit">Salvar Meta</button>
          </form>
        </div>
      </div>

      <div class="cardcontainer">
        <div class="card-meta" v-for="(meta, index) in metas" :key="index" :class="{ active: meta.active }">
          <div class="card-meta">
              <div class="topcardmeta">
                <div class="name">
                  <h1>{{ meta.name }}</h1>
                </div>
                <div class="value">
                  <h1>R${{ meta.value }}</h1>
                </div>
              </div>

              <div class="bodycard">
                <p><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-event" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                  <path d="M16 3l0 4" />
                  <path d="M8 3l0 4" />
                  <path d="M4 11l16 0" />
                  <path d="M8 15h2v2h-2z" />
                </svg>{{ meta.startDate }}</p>
                <p><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-off" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M9 5h9a2 2 0 0 1 2 2v9m-.184 3.839a2 2 0 0 1 -1.816 1.161h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 1.158 -1.815" />
                  <path d="M16 3v4" />
                  <path d="M8 3v1" />
                  <path d="M4 11h7m4 0h5" />
                  <path d="M3 3l18 18" />
                </svg>{{ meta.endDate }}</p>
              </div>

              <div class="bottomcard">
                <div class="progress-bar">
                  <div class="progress" :style="{ width: getProgressWidth(meta) }"></div>
                </div>
              </div>

            </div>
          </div>

          <div class="metas-batidas">
            <div class="card-meta" v-for="(meta, index) in metasBatidas" :key="index">
            <div class="card-meta">
              <!-- Conteúdo da meta batida -->
              <div class="topcardmeta">
                <div class="name">
                  <h1>{{ meta.name }}</h1>
                </div>
                <div class="value">
                  <h1>R${{ meta.value }}</h1>
                </div>
              </div>

              <div class="bodycard">
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-calendar-event"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ffffff"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                    <path d="M16 3l0 4" />
                    <path d="M8 3l0 4" />
                    <path d="M4 11l16 0" />
                    <path d="M8 15h2v2h-2z" />
                  </svg>
                  {{ meta.startDate }}
                </p>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-calendar-off"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ffffff"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 5h9a2 2 0 0 1 2 2v9m-.184 3.839a2 2 0 0 1 -1.816 1.161h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 1.158 -1.815" />
                    <path d="M16 3v4" />
                    <path d="M8 3v1" />
                    <path d="M4 11h7m4 0h5" />
                    <path d="M3 3l18 18" />
                  </svg>
                  {{ meta.endDate }}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>


    </section>

  </div>

</template>


<script>
import { ref, push, set, onValue, query, orderByChild } from 'firebase/database';
import { database } from './firebaseconfig';

export default {
  data() {
    return {
      isSidebarMinimized: false,
      isModalOpen: false,
      metaName: '',
      startDate: '',
      endDate: '',
      metaValue: '',
      metas: [],
      metasBatidas: [], // Initialize an empty array for achieved goals
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    saveMeta() {
  if (this.metaName && this.startDate && this.endDate && this.metaValue) {
    const meta = {
      name: this.metaName,
      startDate: this.startDate,
      endDate: this.endDate,
      value: this.metaValue,
      active: true, // Define como ativa por padrão
    };

    // Calcule o total de vendas para o período especificado
    const vendasNoPeriodo = this.getTotalVendasNoPeriodo(this.startDate, this.endDate);

    if (vendasNoPeriodo >= this.metaValue) {
      // Meta foi atingida, adicione-a às metas batidas
      this.metasBatidas.push(meta);

      // Salve a meta atingida na tabela 'metasBatidas' no Firebase
      const metasBatidasRef = ref(database, 'metasBatidas');
      const newMetaKey = push(metasBatidasRef).key; // Gere uma chave única para a meta
      set(ref(metasBatidasRef, newMetaKey), meta)
        .then(() => {
          console.log('Meta atingida salva com sucesso');
        })
        .catch((error) => {
          console.error('Erro ao salvar a meta atingida:', error);
        });

      // Remova a meta da lista de metas
      this.metas = this.metas.filter((m) => m !== meta);
    } else {
      // Meta não foi atingida, adicione-a à lista de metas
      this.metas.push(meta);
    }

    // Restaure os campos do formulário e feche o modal
    this.metaName = '';
    this.startDate = '';
    this.endDate = '';
    this.metaValue = '';
    this.isModalOpen = false;
  }
},
    getProgressWidth(meta) {
      if (this.metas && this.metas.length > 0) {
        const vendasDia = this.getTotalVendasNoPeriodo(meta.startDate, meta.endDate);
        const progressWidth = (vendasDia / meta.value) * 100;

        console.log('Vendas no período:', vendasDia);
        console.log('Valor da meta:', meta.value);
        console.log('Progresso:', progressWidth);

        return progressWidth > 100 ? '100%' : progressWidth + '%';
      }
      return '0%';
    },

    getTotalVendasNoPeriodo(startDate, endDate) {
      let totalVendas = 0;
      const pedidosRef = ref(database, 'pedidos');
      const queryPedidos = query(pedidosRef, orderByChild('dataEnvio'));

      onValue(queryPedidos, (pedidosSnapshot) => {
        if (pedidosSnapshot.exists()) {
          const data = pedidosSnapshot.val();
          const pedidos = Object.values(data);

          pedidos.forEach((pedido) => {
            const dataEnvio = new Date(pedido.dataEnvio.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$2/$1/$3')).getTime();
            const startDateDate = new Date(startDate).getTime();
            const endDateDate = new Date(endDate).getTime();

            if (dataEnvio >= startDateDate && dataEnvio <= endDateDate) {
              totalVendas += parseFloat(pedido.valorTotal || 0);
            }
          });
        }
      });
      return totalVendas;
    },
    updateMetas() {
      const metasRef = ref(database, 'metas');
      onValue(metasRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const metas = [];
          for (let key in data) {
            metas.push(data[key]);
          }
          this.metas = metas;
        } else {
          this.metas = [];
        }
      });
    },
  },
  
  created() {
    this.updateMetas();
  },
};
</script>
