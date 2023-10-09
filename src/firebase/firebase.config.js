// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGDZ2nyjOWcUH4q9Ts3h8UorNNdTjJlfQ",
  authDomain: "react-event-management-ea405.firebaseapp.com",
  projectId: "react-event-management-ea405",
  storageBucket: "react-event-management-ea405.appspot.com",
  messagingSenderId: "438315815412",
  appId: "1:438315815412:web:bec0287d32f7a192d0e9a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;