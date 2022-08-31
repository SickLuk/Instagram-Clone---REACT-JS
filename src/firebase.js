// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import {getAuth} from "firebase/auth"
import {getDatabase} from "firebase/database";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCcREGACDMeRFrkIAi6oqYwgoqRPxGqEqI",
  authDomain: "instagramreplica-d7de9.firebaseapp.com",
  databaseURL:
    "https://instagramreplica-d7de9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "instagramreplica-d7de9",
  storageBucket: "instagramreplica-d7de9.appspot.com",
  messagingSenderId: "968462755289",
  appId: "1:968462755289:web:be6eee837ffc08d6c825c8",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const storage = getStorage(app);
export{db, auth, storage, firebaseConfig}
