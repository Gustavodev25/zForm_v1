<template>

    <html>
    <link rel="stylesheet" href="/css/cadastro.css">

    </html>

    <div class="fullscreen-loader" v-if="pageLoading">
      <div class="loadertwo">
        <svg class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1366 768">
          <path class="st0" d="M639.36,335.56c-13.28-2.46-25.24-0.27-36.71,5.53c-6.62,3.35-13.04,2.44-18.57-2.35
          c-5.19-4.49-7.06-10.35-5.18-17.1c1.92-6.94,6.64-10.9,13.62-12.26c3.75-0.73,7.28,0.12,10.61,1.81
          c17.06,8.63,34.09,8.57,51.21,0.11c9.31-4.6,19.57-1.11,23.52,7.84c4.01,9.08-0.22,18.68-9.71,22.89
          c-20.43,9.08-35.5,24.66-50.45,41.65c13.5,2.87,25.37,0.58,36.8-5.11c7.58-3.77,16.13-2,21.13,4.31c5.09,6.41,4.92,15.26-0.4,21.58
          c-4.73,5.61-13.18,7.66-19.95,4.2c-17.74-9.06-35.26-8.99-53.01,0c-8.34,4.22-18.52,0.31-22.38-8c-4.16-8.97-0.47-18.66,8.82-22.79
          c20.29-9,35.6-24.1,49.87-40.5C638.87,337.03,638.96,336.5,639.36,335.56z."> </path>
        </svg>
      </div>
    </div>

    <div class="container-cadastro" v-if="!pageLoading">



        <div class="cadastro-content">
            <div class="body-cadastro">
                <input v-model="nome" placeholder="Nome" type="text">
                <input v-model="email" placeholder="Email" type="email">
                <input v-model="senha" placeholder="Senha" type="password">
                <button @click="criarConta" class="btn" :disabled="loading">
                    <span v-if="loading" class="loading"></span>
                    <span v-else>Criar</span>
                </button>
            </div>

        </div>

        <router-link class="link" to="/login">Já tenho uma conta!</router-link>

    </div>

</template>

<script>
import { auth, createUserWithEmailAndPassword, database, ref, set } from './firebaseconfig';

export default {
  data() {
    return {
      nome: '',
      email: '',
      senha: '',
      loading: false,
      pageLoading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.pageLoading = false;
    }, 3000);
  },
  methods: {
    criarConta() {
    this.loading = true;
      createUserWithEmailAndPassword(auth, this.email, this.senha)
        .then((userCredential) => {
          const user = userCredential.user;
          set(ref(database, 'usuarios/' + user.uid), {
            nome: this.nome,
            email: this.email,
          });
          console.log('Usuário registrado com sucesso');
          this.loading = false;
          this.$router.push('/dashboard');
        })
        .catch((error) => {
          console.error('Erro ao criar conta:', error);
          this.loading = false;
        });
    },
  },
};
</script>
