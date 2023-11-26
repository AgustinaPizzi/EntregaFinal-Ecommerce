import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDMIEUV4vwrGlvwjeZJ5CdtVNMMj4gCo_o",
  authDomain: "entregareactlibreria.firebaseapp.com",
  projectId: "entregareactlibreria",
  storageBucket: "entregareactlibreria.appspot.com",
  messagingSenderId: "647027210732",
  appId: "1:647027210732:web:49875d3b104f160990e8c9",
};

const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app); 