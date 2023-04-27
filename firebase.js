// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

import { getAuth } from 'firebase/auth'; 
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOb7RAj4R6Od9j9KRNNmYhRdqHRh0Vv9M",
  authDomain: "mischieftown-1ce48.firebaseapp.com",
  projectId: "mischieftown-1ce48",
  storageBucket: "mischieftown-1ce48.appspot.com",
  messagingSenderId: "1098992265803",
  appId: "1:1098992265803:web:17830312b7a77afa5bbbce"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth(); 
const provider = new GoogleAuthProvider();

export { app, db, storage, auth, provider };