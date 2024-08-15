import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDszE3CiRM2w6pfGeFLLOZWrSaqXdzq1mg",
    authDomain: "bloggingwebsite-53047.firebaseapp.com",
    projectId: "bloggingwebsite-53047",
    storageBucket: "bloggingwebsite-53047.appspot.com",
    messagingSenderId: "555196500336",
    appId: "1:555196500336:web:067d7405de5e8191a127b5",
    measurementId: "G-JFGSLPTYFG"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);