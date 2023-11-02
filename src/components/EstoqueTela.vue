<template>

  <html>
      <link rel="stylesheet" href="/css/clientes.css">   
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
        <h1>Estoque</h1>
      </div>

      <div class="modal" v-if="isModalOpen && produtoEmEdicao">
        <div class="modal-content">
          <div class="top-modal">
            <div class="types">
              <h1>Adicionar Estoque</h1>
              <button class="close-button" @click="fecharModal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-x"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18 6l-12 12" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <p class="subtitle">Ajuste a quantidade de estoque do produto.</p>
          <div class="body-modal">
            <input placeholder="Quantidade em Estoque" type="number" v-model="quantidadeEstoque">
            <button @click="salvarEstoque">Salvar</button>
          </div>
        </div>
      </div>

    </div>

    <div class="bodycontainer">
      <div class="cardscontainer">
        <div class="card" v-for="(produto, index) in produtos" :key="index">
          <div class="topcards">
            <div class="titlecard">
              <h1>{{ produto.nome }}</h1>
            </div>
            <div class="iconscards">
              <a @click="abrirModalEstoque(produto)">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                  <path d="M9 12h6" />
                  <path d="M12 9v6" />
                </svg>
              </a>
            </div>
          </div>
          <div class="cidade">
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-package" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" />
                <path d="M12 12l8 -4.5" />
                <path d="M12 12l0 9" />
                <path d="M12 12l-8 -4.5" />
                <path d="M16 5.25l-8 4.5" />
              </svg>{{ produto.quantidade }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="alertcontainer">
      <transition name="alert" appear>
        <div class="alert" v-if="showAlert" key="alert">
          {{ alertMessage }}
          <button @click="closeAlert">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-x"
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
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
        </div>
      </transition>
    </div>
  </section>
</div>
</template>

<script>
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  getDatabase,
  ref,
  set,
  get,
} from 'firebase/database';

export default {
  data() {
    return {
      user: null,
      isSidebarMinimized: false,
      isModalOpen: false,
      showAlert: false,
      showValidationError: false,
      showErrorMessage: false,
      confirmarExclusao: false,
      alertMessage: '',
      novoProduto: {
        nome: '',
        quantidade: 0,
      },
      produtos: [],
      produtoEmEdicao: null,
      quantidadeEstoque: 0,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarMinimized = !this.isSidebarMinimized;
    },
    openModal() {
      this.isModalOpen = true;
    },
    fecharModal() {
      this.isModalOpen = false;
      this.produtoEmEdicao = null;
      this.quantidadeEstoque = 0;
    },
    editarProduto(produto) {
      this.produtoEmEdicao = JSON.parse(JSON.stringify(produto));
      this.quantidadeEstoque = produto.quantidade; // Inicializa a quantidade de estoque
      this.isModalOpen = true;
    },
    salvarEstoque() {
      if (this.produtoEmEdicao) {
        const novaQuantidade = this.produtoEmEdicao.quantidade + this.quantidadeEstoque; // Somando a quantidade existente com a quantidade a ser adicionada
        const db = getDatabase();
        const produtosRef = ref(db, 'produtos/' + this.produtoEmEdicao.id);
        set(produtosRef, { nome: this.produtoEmEdicao.nome, quantidade: novaQuantidade, id: this.produtoEmEdicao.id })
          .then(() => {
            this.mostrarAlerta(`Estoque de ${this.produtoEmEdicao.nome}`, 'foi atualizado com sucesso!');
            this.isModalOpen = false;
            this.listarProdutos();
          })
          .catch((error) => {
            console.error('Erro ao salvar a quantidade de estoque:', error);
          });
      } else {
        console.error('Produto em edição não encontrado.');
      }
    },
    cancelarEdicao() {
      this.isModalOpen = false;
      this.produtoEmEdicao = null;
      this.quantidadeEstoque = 0;
    },
    mostrarAlerta(title, message) {
      this.alertMessage = `${title} ${message}`;
      this.showAlert = true;

      setTimeout(() => {
        this.closeAlert();
      }, 5000);
    },
    listarProdutos() {
      const db = getDatabase();
      const produtosRef = ref(db, 'produtos');

      get(produtosRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const produtos = [];
            snapshot.forEach((childSnapshot) => {
              const produto = childSnapshot.val();
              produto['.key'] = childSnapshot.key;
              produtos.push(produto);
            });
            this.produtos = produtos;
          } else {
            this.produtos = [];
          }
        })
        .catch((error) => {
          console.error('Erro ao buscar produtos:', error);
        });
    },
    closeAlert() {
      this.showAlert = false;
      this.alertMessage = '';
    },
    abrirModalEstoque(produto) {
      this.produtoEmEdicao = JSON.parse(JSON.stringify(produto));
      this.quantidadeEstoque = produto.quantidade; // Inicializa a quantidade de estoque
      this.isModalOpen = true;
    }
  },
  created() {
    this.listarProdutos();

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
};
</script>
