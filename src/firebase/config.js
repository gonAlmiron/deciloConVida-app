import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlUZzxJ50LvS3SGEGYaHgyccCxBYRPY_s",
  authDomain: "dcv-app.firebaseapp.com",
  projectId: "dcv-app",
  storageBucket: "dcv-app.appspot.com",
  messagingSenderId: "665392554907",
  appId: "1:665392554907:web:6e6eb419782e54b936b73e"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)