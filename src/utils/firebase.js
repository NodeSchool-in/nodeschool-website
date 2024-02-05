import { initializeApp } from "firebase/app";
import { getAnalytics , logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC78k5EVzGZoMO5dO22xElgAEaBRi7hy3w",
  authDomain: "nodeschool-f729c.firebaseapp.com",
  projectId: "nodeschool-f729c",
  storageBucket: "nodeschool-f729c.appspot.com",
  messagingSenderId: "893921470522",
  appId: "1:893921470522:web:245d008528420a69c26d03",
  measurementId: "G-NZ7DDJNGSQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebase = {analytics:getAnalytics(app),logEvent};