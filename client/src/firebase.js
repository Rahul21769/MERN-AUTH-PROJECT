// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-149f4.firebaseapp.com",
  projectId: "mern-auth-149f4",
  storageBucket: "mern-auth-149f4.appspot.com",
  messagingSenderId: "767720550756",
  appId: "1:767720550756:web:df0eb0550c17ff30bc0a71",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
