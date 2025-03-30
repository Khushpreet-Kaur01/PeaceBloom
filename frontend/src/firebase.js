// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzrAt9TzDNB6XqUgE-nkYEX5Cgpw9so1k",
  authDomain: "peacebloom-1bb88.firebaseapp.com",
  projectId: "peacebloom-1bb88",
  storageBucket: "peacebloom-1bb88.firebasestorage.app",
  messagingSenderId: "333938694864",
  appId: "1:333938694864:web:5c2e9a7f36ffe91de7dcd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);


export default db;
export {auth};
export {app};