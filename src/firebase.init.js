// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMhTkwGL4l52gbOObmyhoqIEdaB4W6PRY",
  authDomain: "grocery-stock-b213c.firebaseapp.com",
  projectId: "grocery-stock-b213c",
  storageBucket: "grocery-stock-b213c.appspot.com",
  messagingSenderId: "623930690181",
  appId: "1:623930690181:web:072dc42ffad543030f77ec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
