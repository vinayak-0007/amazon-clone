import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA1WDUo_Adh_Pm7bccdCf6PE5haRKGxeIQ",
  authDomain: "clone-440a9.firebaseapp.com",
  projectId: "clone-440a9",
  storageBucket: "clone-440a9.appspot.com",
  messagingSenderId: "80219747469",
  appId: "1:80219747469:web:8213438880cd9f2b44dec4",
  measurementId: "G-RZ6Y2TRBQY"
};


const firebaseApp = firebase.initializeApp( firebaseConfig );

const db = firebaseApp.firestore();


const auth = firebase.auth();

export  { db, auth };