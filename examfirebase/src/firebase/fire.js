// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEJIi6TmapiYrsRMJZLliiGDCjBVltlqo",
  authDomain: "fir-crudeexam.firebaseapp.com",
  projectId: "fir-crudeexam",
  storageBucket: "fir-crudeexam.firebasestorage.app",
  messagingSenderId: "404076382770",
  appId: "1:404076382770:web:38967fb5741824cee5ca2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export let db = getFirestore(app);