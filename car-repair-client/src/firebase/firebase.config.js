// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyxtfs-K23JtDwQYP249OMOkH7z9YSsyA",
  authDomain: "carrepair-bd.firebaseapp.com",
  projectId: "carrepair-bd",
  storageBucket: "carrepair-bd.appspot.com",
  messagingSenderId: "19933810176",
  appId: "1:19933810176:web:fb2ddb15ac30e7030212e5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
