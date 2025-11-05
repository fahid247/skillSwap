// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_hsAhsniIKEUrjsHR6QL7hB14neflKRc",
  authDomain: "skillswap-de43c.firebaseapp.com",
  projectId: "skillswap-de43c",
  storageBucket: "skillswap-de43c.firebasestorage.app",
  messagingSenderId: "1018242953837",
  appId: "1:1018242953837:web:650fa47d7fb9e974b68564"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);