// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import 'firebase/storage';
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWUOGB7LWDOEbC5DJgYLy7-7TXNKpof2U",
  authDomain: "compiler-3c49e.firebaseapp.com",
  projectId: "compiler-3c49e",
  storageBucket: "compiler-3c49e.appspot.com",
  messagingSenderId: "883982890612",
  appId: "1:883982890612:web:a823b1fa66da75b4b98321",
  measurementId: "G-69RYWRM13Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


// export 
export const auth = getAuth(app);

export const storage = getStorage(app);

export default db;