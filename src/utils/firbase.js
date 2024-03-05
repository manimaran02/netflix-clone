// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVkoq9j4JVRTAhPr8pYRNwT684v-yz8h0",
  authDomain: "netflixclone-43e13.firebaseapp.com",
  projectId: "netflixclone-43e13",
  storageBucket: "netflixclone-43e13.appspot.com",
  messagingSenderId: "33654535244",
  appId: "1:33654535244:web:1b78d3994ec81b076a30e9",
  measurementId: "G-4JJ8T6ZD4S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();