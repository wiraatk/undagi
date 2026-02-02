// file: firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
    getFirestore, 
    doc, 
    getDoc, 
    setDoc, 
    updateDoc,
    collection, // <--- INI BARU (PENTING BUAT ADMIN)
    getDocs     // <--- INI BARU (PENTING BUAT ADMIN)
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

// --- CONFIG FIREBASE KAMU (Dari Project undanginaja-9ab71) ---
// Catatan: Ini project lama yang region Indonesia ya. 
// Karena kita sudah pakai ImgBB untuk gambar, harusnya aman untuk Database saja.
const firebaseConfig = {
    apiKey: "AIzaSyAJWbqP-uX1O1uHGUhotGI6r8hgvrALj84",
    authDomain: "undanginaja-9ab71.firebaseapp.com",
    projectId: "undanginaja-9ab71",
    storageBucket: "undanginaja-9ab71.appspot.com",
    messagingSenderId: "1069509999582",
    appId: "1:1069509999582:web:2c4e34626e2b35c0573b4f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// EXPORT LENGKAP
export { 
    app, db, auth, 
    doc, getDoc, setDoc, updateDoc, 
    collection, getDocs, // <--- JANGAN LUPA INI DI-EXPORT
    onAuthStateChanged, signOut, 
    createUserWithEmailAndPassword, signInWithEmailAndPassword,
    GoogleAuthProvider, signInWithPopup 
};