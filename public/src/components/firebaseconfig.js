import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCbxzbFTcDlllvh8LAvdGHZuiUA3_M97ZA",
    authDomain: "zform-4523d.firebaseapp.com",
    databaseURL: "https://zform-4523d-default-rtdb.firebaseio.com",
    projectId: "zform-4523d",
    storageBucket: "zform-4523d.appspot.com",
    messagingSenderId: "441584080380",
    appId: "1:441584080380:web:d1b34c1d9a8c108cc5ce79",
    measurementId: "G-X7CGBL4XSD"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

export { auth, database, createUserWithEmailAndPassword, getDatabase, ref, set };