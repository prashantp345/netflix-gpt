// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{ getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSFFdqgMZ2WbvgLJWwyiuY371ArwlewoQ",
  authDomain: "netflix-gpt-web.firebaseapp.com",
  projectId: "netflix-gpt-web",
  storageBucket: "netflix-gpt-web.appspot.com",
  messagingSenderId: "797634533632",
  appId: "1:797634533632:web:1f88ee132634c66df7fbe5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();