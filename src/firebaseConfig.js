import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBdp_FfceZ2SKKm55ByPY38iem5XCZvflY",
  authDomain: "proyectofinalreact-67020.firebaseapp.com",
  projectId: "proyectofinalreact-67020",
  storageBucket: "proyectofinalreact-67020.appspot.com",
  messagingSenderId: "906839795312",
  appId: "1:906839795312:web:3eef7ed062271224c976b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore