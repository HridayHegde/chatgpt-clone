import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBP_aG4VBBmParyaZBohF6flrBKDudQTiE",

  authDomain: "chatgpt-messenger-clone-b7b26.firebaseapp.com",

  projectId: "chatgpt-messenger-clone-b7b26",

  storageBucket: "chatgpt-messenger-clone-b7b26.appspot.com",

  messagingSenderId: "930918178730",

  appId: "1:930918178730:web:009ec6ab73fe175caa95d3",
};

// Initialize Firebase

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
