// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5anQCX7DD6tyg8AaJb24OaOKD863uG18",
  authDomain: "food-bliss-firebase.firebaseapp.com",
  projectId: "food-bliss-firebase",
  storageBucket: "food-bliss-firebase.appspot.com",
  messagingSenderId: "5692818620",
  appId: "1:5692818620:web:427a5fbbd71dcb0f62fcb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;