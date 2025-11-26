import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCL0fFmMVJWOh-DLXRFqidUMw26mTo_Va0",
  authDomain: "link-in-bio-f82d4.firebaseapp.com",
  projectId: "link-in-bio-f82d4",
  storageBucket: "link-in-bio-f82d4.firebasestorage.app",
  messagingSenderId: "602460237302",
  appId: "1:602460237302:web:adc3edf6c811335e182bd7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;