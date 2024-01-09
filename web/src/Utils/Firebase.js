// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADHM_MOKlrYadoNim-QfV4yKOEfn4vX5E",
  authDomain: "taptocontact-fa569.firebaseapp.com",
  projectId: "taptocontact-fa569",
  storageBucket: "taptocontact-fa569.appspot.com",
  messagingSenderId: "736854051079",
  appId: "1:736854051079:web:7b056474273a23e3fd5da2",
  measurementId: "G-1PFQC4J42C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const analytics = getAnalytics(app);
export {storage}
