// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBst5StVpSOJLPZ8q3Rb-32SwU_qWyE2FE",
  authDomain: "perfume-house-66ea6.firebaseapp.com",
  projectId: "perfume-house-66ea6",
  storageBucket: "perfume-house-66ea6.appspot.com",
  messagingSenderId: "438740492090",
  appId: "1:438740492090:web:dc6a645a8773cfd612fa03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;