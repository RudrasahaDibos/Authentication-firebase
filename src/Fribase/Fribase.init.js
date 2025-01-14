// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_Z0iT_z0k5N39V-5HI1xHyRtRIXukiBo",
  authDomain: "auth-firebase-1ddde.firebaseapp.com",
  projectId: "auth-firebase-1ddde",
  storageBucket: "auth-firebase-1ddde.firebasestorage.app",
  messagingSenderId: "1094019102892",
  appId: "1:1094019102892:web:b0cf9f9a73836657290709"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;