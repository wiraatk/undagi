import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
    getFirestore, 
    doc, 
    getDoc, 
    setDoc, 
    updateDoc,
    collection, 
    getDocs     
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { 
    getAuth, 
    onAuthStateChanged, 
    signOut, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    GoogleAuthProvider, 
    signInWithPopup 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// --- CONFIG FIREBASE KAMU ---
const firebaseConfig = {
    apiKey: "AIzaSyAJWbqP-uX1O1uHGUhotGI6r8hgvrALj84",
    authDomain: "undanginaja-9ab71.firebaseapp.com",
    projectId: "undanginaja-9ab71",
    storageBucket: "undanginaja-9ab71.appspot.com",
    messagingSenderId: "1069509999582",
    appId: "1:1069509999582:web:2c4e34626e2b35c0573b4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(); // <--- INI SUDAH DITAMBAHKAN

// EXPORT LENGKAP (Provider sudah masuk)
export { 
    app, db, auth, 
    provider, // <--- INI YANG BIKIN ERROR KEMARIN (SUDAH DIPERBAIKI)
    doc, getDoc, setDoc, updateDoc, 
    collection, getDocs, 
    onAuthStateChanged, signOut, 
    createUserWithEmailAndPassword, signInWithEmailAndPassword,
    GoogleAuthProvider, signInWithPopup 
};
