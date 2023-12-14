// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUNkSkBNep8bkgzMjnzlXO419F41m2SVE",
  authDomain: "spring-base-391203.firebaseapp.com",
  projectId: "spring-base-391203",
  storageBucket: "spring-base-391203.appspot.com",
  messagingSenderId: "1022845730695",
  appId: "1:1022845730695:web:8cdd7f4a676ec890381d22",
  measurementId: "G-HRCP76E3V0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);