import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBjT-oeG0W6WuNUx-DMTIfTEa842QgOG-w",
  authDomain: "react-netflix-clone-e7043.firebaseapp.com",
  projectId: "react-netflix-clone-e7043",
  storageBucket: "react-netflix-clone-e7043.appspot.com",
  messagingSenderId: "898059956824",
  appId: "1:898059956824:web:f78e5ca4f2267adf0fd02d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);