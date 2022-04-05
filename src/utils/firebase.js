// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBpL37EnU2EJg1B9WNgfJlgqoD-9WJUuY",
  authDomain: "como-en-casa-react.firebaseapp.com",
  projectId: "como-en-casa-react",
  storageBucket: "como-en-casa-react.appspot.com",
  messagingSenderId: "875940828607",
  appId: "1:875940828607:web:a2910884cb433f690bfd0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const getBaseDatos = getFirestore(app);