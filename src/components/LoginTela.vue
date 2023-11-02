<template>

    <html>
    <link rel="stylesheet" href="/css/login.css">

    </html>

    <div class="fullscreen-loader" v-if="pageLoading">
      <div class="loadertwo">
        <svg class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1366 768">
          <path class="st0" d="M780.89,287.45c-3.51-8-9.97-11.71-18.7-11.54c-2.66,0.05-5.39,0.38-7.98-0.07
            c-8.22-1.44-13.28,2.48-18.41,8.52c-32.78,38.52-65.92,76.74-98.95,115.06c-20.1,23.31-40.23,46.6-60.31,69.94
            c-5.52,6.41-6.71,13.68-3.19,21.39c3.44,7.52,9.48,11.33,17.83,11.31c2.33-0.01,4.66,0,6.99,0c1.33,0,2.7-0.19,3.99,0.04
            c6.28,1.12,10.26-1.71,14.31-6.44c53.37-62.29,107.16-124.22,160.6-186.44C782.73,302.66,784.37,295.4,780.89,287.45z"/>
          <path class="st0" d="M585.34,327.52c13.06,6.04,28.24,3.71,38.46-6.15c3.46-3.34,6.51-7.12,9.67-10.77
            c9.7-11.16,19.36-22.36,29.5-34.08c-1.33-0.36-1.78-0.59-2.23-0.59c-25.98,0-51.95-0.12-77.93,0.09
            c-9.74,0.08-17.78,8.61-18.18,18.47C564.04,308.67,572,321.36,585.34,327.52z"/>
          <path class="st0" d="M651.09,299.93c-14.17,16.37-28.35,32.75-42.52,49.12c-4.21,4.93-8.79,9.6-12.54,14.86
            c-6.69,9.38-4.67,22.25,4.23,30.29c8,7.23,21.78,7.74,29.85,0.45c5.77-5.21,10.89-11.15,15.26-17.66c0,0,0,0,0,0
            c6.6-7.41,13.32-14.72,19.77-22.26c7.55-8.82,15.64-17.18,22.37-26.69c15.48-16.67,30.11-34.07,45.61-52.1
            c-20.72,0-40.15,0-59.58-0.01c-1.24,0-2.26,0.37-3.07,1.33C664.02,284.82,657.55,292.38,651.09,299.93
            C651.09,299.93,651.09,299.93,651.09,299.93z"/>
          <path class="st0" d="M719.64,459.16c6.66-8.04,14.28-15.28,19.95-24.14c5.94-6.77,11.87-13.54,17.81-20.31
            c5.2-5.83,5.26-12.79,3.47-19.64c-4.67-19.54-31.69-22.81-42.12-6.04c0,0,0,0,0,0c-6.66,7.49-13.55,14.78-19.54,22.84c0,0,0,0,0,0
            c-9.33,10.01-18.32,20.31-26.79,31.05c0,0,0,0,0,0c-17.44,20.01-34.07,38.74-51.44,59.17c20.63,0,40.03-0.01,59.42,0.03
            c1.68,0,2.77-0.7,3.8-1.91c8.04-9.5,16.12-18.97,24.19-28.45C712.15,467.57,716.05,463.49,719.64,459.16z"/>
          <path class="st0" d="M726.44,460.96c-11.67,13.38-23.35,26.75-35.72,40.93c22.42,0,43.58,0,64.74,0l0,0l0,0
            c5.31,0.06,10.63,0.32,15.93,0.12c9.77-0.37,17.71-8.65,18.07-18.51C790.85,450.19,747.27,433.6,726.44,460.96z"/>
        </svg>
      </div>
    </div>

    <div class="container-cadastro" v-if="!pageLoading">



        <div class="cadastro-content">
            <div class="body-cadastro">
                <input v-model="email" placeholder="Email" type="email">
                <input v-model="senha" placeholder="Senha" type="password">
                <button @click="entrar" class="btn" :disabled="loading">
                  <span v-if="loading" class="loading"></span>
                  <span v-else>Entrar</span>
                </button>
            </div>

        </div>

        <router-link class="link" to="/cadastro">Não tenho uma conta!</router-link>
    </div>

</template>

<script>
import { getAuth, signInWithEmailAndPassword, updateProfile, onAuthStateChanged } from 'firebase/auth';

export default {
  data() {
    return {
      email: '',
      senha: '',
      loading: false,
      pageLoading: true,
      user: null, 
    };
  },
  mounted() {
    setTimeout(() => {
      this.pageLoading = false;
    }, 4000);
  },
  methods: {
  entrar() {
    this.loading = true;
    const auth = getAuth();

    signInWithEmailAndPassword(auth, this.email, this.senha)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Usuário autenticado com sucesso', user);

        updateProfile(user, {
          displayName: 'Nome do Usuário Aqui',
        })
          .then(() => {
            this.user = user;
          })
          .catch((error) => {
            console.error('Erro ao atualizar o nome de exibição:', error);
          });

        this.loading = false;
        this.$router.push('/dashboard');
      })
      .catch((error) => {
        console.error('Erro ao autenticar:', error);
        this.loading = false;
      });
  },
  },
  created() {
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