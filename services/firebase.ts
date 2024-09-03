import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZWVgYVeHtPOIwYMDceg0y3tCrmLuEZ-0",
  authDomain: "frontiers-challenge.firebaseapp.com",
  projectId: "frontiers-challenge",
  storageBucket: "frontiers-challenge.appspot.com",
  messagingSenderId: "218533733631",
  appId: "1:218533733631:web:53d3b159dd405fe9cd98ca",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
