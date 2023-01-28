import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnjAL2eEH4onOiYCRPpsgB_8gHbjmJ7WE",
  authDomain: "blog-7d0ba.firebaseapp.com",
  projectId: "blog-7d0ba",
  storageBucket: "blog-7d0ba.appspot.com",
  messagingSenderId: "54227186369",
  appId: "1:54227186369:web:2cd280778949d7b34b9a40",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
