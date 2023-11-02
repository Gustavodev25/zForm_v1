import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBDTqR2uvnXKcWxQjZWeXDEwfBnz2Oaf0k",
  authDomain: "zform-v1.firebaseapp.com",
  databaseURL: "https://zform-v1-default-rtdb.firebaseio.com",
  projectId: "zform-v1",
  storageBucket: "zform-v1.appspot.com",
  messagingSenderId: "957047329378",
  appId: "1:957047329378:web:a1280bdec88e436c2ef73b"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

export { auth, database, createUserWithEmailAndPassword, getDatabase, ref, set };