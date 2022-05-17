// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRfCZaaAOvg91B6rF19UJASHu0ObWhViE",
  authDomain: "perfume-house-6d883.firebaseapp.com",
  projectId: "perfume-house-6d883",
  storageBucket: "perfume-house-6d883.appspot.com",
  messagingSenderId: "925942367046",
  appId: "1:925942367046:web:f0845d6d06833709421b47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;