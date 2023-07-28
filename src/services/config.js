import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "e-comerce-112ac.firebaseapp.com",
  projectId: "e-comerce-112ac",
  storageBucket: "e-comerce-112ac.appspot.com",
  messagingSenderId: "444413740117",
  appId: "1:444413740117:web:8470278cfeace0eed5c0dc"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);