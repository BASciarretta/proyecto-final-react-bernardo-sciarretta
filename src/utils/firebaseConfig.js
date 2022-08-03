// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdtYvxnVm7G6pcirnchdOoXvo-P7uU1ds",
  authDomain: "videojuegos-shop.firebaseapp.com",
  projectId: "videojuegos-shop",
  storageBucket: "videojuegos-shop.appspot.com",
  messagingSenderId: "39964096298",
  appId: "1:39964096298:web:4608e4aaae8dfd1f741053"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const productsCollection = collection(db, 'products')