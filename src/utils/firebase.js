// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVc74_G9S3nRfJv6xHM7BqrX4yMz2rdxQ",
  authDomain: "netfilxgptabhi.firebaseapp.com",
  projectId: "netfilxgptabhi",
  storageBucket: "netfilxgptabhi.appspot.com",
  messagingSenderId: "959455143713",
  appId: "1:959455143713:web:6dee6e5af1b3a91b908060",
  measurementId: "G-GJFBHP3SDG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//auth
export const auth = getAuth();
