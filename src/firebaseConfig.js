// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnjAL2eEH4onOiYCRPpsgB_8gHbjmJ7WE",
  authDomain: "blog-7d0ba.firebaseapp.com",
  projectId: "blog-7d0ba",
  storageBucket: "blog-7d0ba.appspot.com",
  messagingSenderId: "54227186369",
  appId: "1:54227186369:web:2cd280778949d7b34b9a40",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
