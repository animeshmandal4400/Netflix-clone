// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAazf8x9sJIzaC-8b7s590UaYvhrhJ7FfY",
  authDomain: "netflix-clone-ca891.firebaseapp.com",
  projectId: "netflix-clone-ca891",
  storageBucket: "netflix-clone-ca891.appspot.com",
  messagingSenderId: "442847972893",
  appId: "1:442847972893:web:9794247f1165edc78300f4",
  measurementId: "G-RECYP15SVY",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
