// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";   
import { getFirestore } from "firebase/firestore";   

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCABAgPAkOuCLihzAGoFAlH1EK3593aJIY",
  authDomain: "first-app-7d2e1.firebaseapp.com",
  projectId: "first-app-7d2e1",
  storageBucket: "first-app-7d2e1.firebasestorage.app",
  messagingSenderId: "605579727889",
  appId: "1:605579727889:web:eb2262ce3bec25b96e4db0",
  measurementId: "G-6EKMTE3BEM"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
  