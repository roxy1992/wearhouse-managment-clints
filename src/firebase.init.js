// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB0q0lM4_o63LZckhlg40h6Ussip8XmpDs",
    authDomain: "mobile-corner-service.firebaseapp.com",
    projectId: "mobile-corner-service",
    storageBucket: "mobile-corner-service.appspot.com",
    messagingSenderId: "878967969265",
    appId: "1:878967969265:web:77fb72160ad4cf61cc2050"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;