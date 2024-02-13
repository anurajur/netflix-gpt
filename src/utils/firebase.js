// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqoyMRxlIDmCPccKAjJr8MLJt32Qot4w8",
  authDomain: "netflixgpt-17365.firebaseapp.com",
  projectId: "netflixgpt-17365",
  storageBucket: "netflixgpt-17365.appspot.com",
  messagingSenderId: "603044085497",
  appId: "1:603044085497:web:68b952e704a9c14c1f2c28",
  measurementId: "G-59B5DKTFGL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
