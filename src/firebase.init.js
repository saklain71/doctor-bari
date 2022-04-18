// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcK3g5HEOaRLGUO8Qv2_fHEju9krDzLUw",
  authDomain: "doctor-bari-8537c.firebaseapp.com",
  projectId: "doctor-bari-8537c",
  storageBucket: "doctor-bari-8537c.appspot.com",
  messagingSenderId: "667271343122",
  appId: "1:667271343122:web:9a894fd8b0b24953153ccb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default app;