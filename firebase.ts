// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFunctions } from "firebase/functions";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBLxGqANUWUOdZs8LrW0MslPM2O0cqFn0",
  authDomain: "docsdrop-3ac6e.firebaseapp.com",
  projectId: "docsdrop-3ac6e",
  storageBucket: "docsdrop-3ac6e.appspot.com",
  messagingSenderId: "327792590370",
  appId: "1:327792590370:web:e9b10797555e490715547b"
};

// Initialize Firebase

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };