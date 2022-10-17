import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getStorage } from "firebase/storage";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDpYWX74CFgQq0c2jK3hmab3VZX-JR8DnI",
  authDomain: "ichat-140bf.firebaseapp.com",
  projectId: "ichat-140bf",
  storageBucket: "ichat-140bf.appspot.com",
  messagingSenderId: "396586221663",
  appId: "1:396586221663:web:f2d037ef5ff36a6fcddbea"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();