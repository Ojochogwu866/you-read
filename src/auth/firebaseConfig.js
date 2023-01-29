import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXYiLKbLeThK03XFWD8pigjey3KBv_6zk",
  authDomain: "you-read-cfbeb.firebaseapp.com",
  projectId: "you-read-cfbeb",
  storageBucket: "you-read-cfbeb.appspot.com",
  messagingSenderId: "843163331818",
  appId: "1:843163331818:web:092b3c99f9c10527f47b93",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
