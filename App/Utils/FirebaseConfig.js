// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJI7VbXVoCTgQNTtylQtc62-Ktu0813e0",
  authDomain: "fir-chat-b300b.firebaseapp.com",
  databaseURL: "https://fir-chat-b300b-default-rtdb.firebaseio.com",
  projectId: "fir-chat-b300b",
  storageBucket: "fir-chat-b300b.appspot.com",
  messagingSenderId: "270353227799",
  appId: "1:270353227799:web:3ab111b84a5e333467fc52",
  measurementId: "G-LFKCQCQDY6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
