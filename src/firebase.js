// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCgBCjybkNpqc67W-Rb1GAatk9B-eAO0iM",

  authDomain: "lpu2-6c105.firebaseapp.com",

  projectId: "lpu2-6c105",

  storageBucket: "lpu2-6c105.appspot.com",

  messagingSenderId: "622729188901",

  appId: "1:622729188901:web:97fad6b9eba42e5a8991cc",

  measurementId: "G-6FGJRDH59C"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth()
export{auth,app}