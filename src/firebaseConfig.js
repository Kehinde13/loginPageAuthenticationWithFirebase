// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
  getAuth, 
  signInWithRedirect, 
  GoogleAuthProvider, 
  getRedirectResult,
  onAuthStateChanged  
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtdu6SOLsw9OoOAffpBB1HRM5JTwfU8a4",
  authDomain: "loginauth-34aaf.firebaseapp.com",
  projectId: "loginauth-34aaf",
  storageBucket: "loginauth-34aaf.appspot.com",
  messagingSenderId: "217719616225",
  appId: "1:217719616225:web:f5cc41457df03526e5fda0",
  measurementId: "G-RB8H68PKZY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const database = getAuth(app)

export {
  app,
  provider,
  auth,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
  database
}