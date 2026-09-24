// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyBCqMY5IBiVsItsWtjRfVg4No7_f1nCqwI",
  authDomain: "crudproject-4e338.firebaseapp.com",
  databaseURL:"https://crudproject-4e338-default-rtdb.firebaseio.com",
  projectId: "crudproject-4e338",
  storageBucket: "crudproject-4e338.firebasestorage.app",
  messagingSenderId:"232753365471",
  appId:"1:232753365471:web:cae36070beaf612e67846a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database=getDatabase(app)
export const firebase_auth=getAuth(app)