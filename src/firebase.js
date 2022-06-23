// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMYOT7fhdruHedKpQEeohLWj5SWzXnKi8",
  authDomain: "react-messenger-ebafb.firebaseapp.com",
  databaseURL: "http://react-messenger-ebafb.firebaseio.com",
  projectId: "react-messenger-ebafb",
  storageBucket: "react-messenger-ebafb.appspot.com",
  messagingSenderId: "908348334102",
  appId: "1:908348334102:web:1039a304959076c9879537"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
