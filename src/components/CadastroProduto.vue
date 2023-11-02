<template>

    <html>
        <link rel="stylesheet" href="/css/produtos.css">   
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
          <h1>Produtos</h1>
        </div>

        <div class="button-section">
          <button @click="openModal">Criar</button>
        </div>


        <div class="modal" v-if="isModalOpen && !produtoEmEdicao">
          <div class="modal-content">
            <div class="top-modal">
              <div class="types">
                <h1>Criar Produto</h1>
                <button class="close-button" @click="fecharModal"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M18 6l-12 12" />
                  <path d="M6 6l12 12" />
                </svg></button>
              </div>
            </div>  
            <p class="subtitle">Forneça as informaçoes do seu produto aqui.</p>          

            <div class="body-modal">
              <input placeholder="Nome" type="text" v-model="novoProduto.nome">
              <button @click="criarProduto">Criar</button>
            </div>

          </div>
        </div>

        <div class="modal" v-if="produtoEmEdicao">
          <div class="modal-content">
            <div class="top-modal">
              <div class="types">
                <h1>Editar Produto</h1>
                <button class="close-button" @click="fecharModal"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M18 6l-12 12" />
                  <path d="M6 6l12 12" />
                </svg></button>
              </div>
            </div>  
            <p class="subtitle">Edite as informações do seu produto aqui.</p>                  

            <div class="body-modal">
              <input placeholder="Nome" type="text" v-model="produtoEmEdicao.nome">
              <button @click="salvarEdicao">Salvar</button>
            </div>
          </div>
        </div>

        <div class="modal" v-if="confirmarExclusao">
          <div class="modal-content">
            <div class="top-modal">
              <div class="types">
                <h1>Confirmar Exclusão</h1>
                <button class="close-button" @click="cancelarExclusao">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M18 6l-12 12" />
                    <path d="M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <p class="subtitle">Tem certeza que quer excluir "{{ produtoParaExclusao.nome }}"?</p>
            <div class="body-modal">
              <button @click="executarExclusao">Confirmar</button>
            </div>
          </div>
        </div>

      </div>

      <div class="bodycontainer">
        
        <div class="cardscontainer">
          <div class="card" v-for="(produto, index) in produtos" :key="index">
            <div class="titlecard">
              <h1>{{ produto.nome }}</h1>
            </div>
            <div class="iconscards">
              <a @click="editarProduto(produto)">
                <!-- Ícone de edição -->
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit-circle" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M12 15l8.385 -8.415a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3z" />
                  <path d="M16 5l3 3" />
                  <path d="M9 7.07a7 7 0 0 0 1 13.93a7 7 0 0 0 6.929 -6" />
                </svg>
              </a>
              <a @click="deletarProduto(produto)">
                <!-- Ícone de exclusão -->
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-rounded-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M10 10l4 4m0 -4l-4 4" />
                  <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
      </div>


      <div class="alertcontainer">
        <transition name="alert" appear>
          <div class="alert" v-if="showAlert" key="alert">
            {{ alertMessage }}
            <button @click="closeAlert">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
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
  push,
  set,
  get,
  remove,
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
      },
      produtos: [],
      produtoEmEdicao: null,
      produtoParaExclusao: null,
      quantidade: 0,
      spreadsheetId: '',
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
    },
    criarProduto() {
      if (this.novoProduto.nome) {
        const auth = getAuth();
        if (auth.currentUser) {
          const productName = this.novoProduto.nome;

          const newProduct = {
            nome: productName,
            quantidade: 0,
          };

          this.novoProduto = {
            nome: '',
          };

          this.isModalOpen = false;

          const db = getDatabase();
          const produtosRef = ref(db, 'produtos');
          const novoProdutoRef = push(produtosRef);
          const novoProdutoKey = novoProdutoRef.key;

          set(novoProdutoRef, { ...newProduct, id: novoProdutoKey });

          this.mostrarAlerta(productName, 'foi criado com sucesso!');
        } else {
          this.mostrarErrorMessage(
            'Você precisa estar autenticado para criar um produto.'
          );
        }
      } else {
        this.mostrarValidationError(
          'Por favor, preencha o campo de nome do produto.'
        );
      }
    },
    editarProduto(produto) {
      this.produtoEmEdicao = JSON.parse(JSON.stringify(produto));
      this.isModalOpen = true;
    },
    salvarEdicao() {
      if (this.produtoEmEdicao) {
        const db = getDatabase();
        const produtosRef = ref(db, 'produtos/' + this.produtoEmEdicao.id);
        set(produtosRef, { nome: this.produtoEmEdicao.nome, id: this.produtoEmEdicao.id })
          .then(() => {
            this.mostrarAlerta(this.produtoEmEdicao.nome, 'foi editado com sucesso!');
            this.isModalOpen = false;
            this.produtoEmEdicao = null;
            this.listarProdutos();
          })
          .catch((error) => {
            console.error('Erro ao salvar a edição:', error);
          });
      } else {
        console.error('Produto em edição não encontrado.');
      }
    },
    cancelarEdicao() {
      this.isModalOpen = false;
      this.produtoEmEdicao = null;
    },
    mostrarAlerta(productName, message) {
      this.alertMessage = `Produto ${productName} ${message}`;
      this.showAlert = true;

      setTimeout(() => {
        this.closeAlert();
      }, 5000);
    },
    mostrarValidationError(message) {
      this.alertMessage = message;
      this.showValidationError = true;

      setTimeout(() => {
        this.closeValidationError();
      }, 5000);
    },
    mostrarErrorMessage(message) {
      this.alertMessage = message;
      this.showErrorMessage = true;

      setTimeout(() => {
        this.closeErrorMessage();
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
    closeValidationError() {
      this.showValidationError = false;
      this.alertMessage = '';
    },
    closeErrorMessage() {
      this.showErrorMessage = false;
      this.alertMessage = '';
    },
    deletarProduto(produto) {
      if (produto && produto.id) {
        this.produtoParaExclusao = produto;
        this.confirmarExclusao = true;
      }
    },
    cancelarExclusao() {
      this.confirmarExclusao = false;
      this.produtoParaExclusao = null;
    },
    executarExclusao() {
      if (this.produtoParaExclusao && this.produtoParaExclusao.id) {
        const db = getDatabase();
        const produtosRef = ref(db, 'produtos/' + this.produtoParaExclusao.id);
        remove(produtosRef)
          .then(() => {
            this.mostrarAlerta(this.produtoParaExclusao.nome, 'foi excluído com sucesso!');
            this.listarProdutos();
            this.cancelarExclusao();
          })
          .catch((error) => {
            console.error('Erro ao excluir o produto:', error);
          });
      } else {
        console.error('Produto inválido ou sem ID.');
      }
    },
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
