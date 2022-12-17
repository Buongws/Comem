// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyATOCzD5YRGyYTsdbasLREoBhsa1hKFjfg",
  authDomain: "comem-a0490.firebaseapp.com",
  projectId: "comem-a0490",
  storageBucket: "comem-a0490.appspot.com",
  messagingSenderId: "654050465194",
  appId: "1:654050465194:web:542f9583a0875483e587d3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const provider = new GoogleAuthProvider();

export default app;
