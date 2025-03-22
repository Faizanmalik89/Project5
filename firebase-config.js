// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAeopZBOH519qVwLkAL06RttMG-wyfAC5M",
    authDomain: "realistic-c5616.firebaseapp.com",
    projectId: "realistic-c5616",
    storageBucket: "realistic-c5616.firebasestorage.app",
    messagingSenderId: "809481702160",
    appId: "1:809481702160:web:10a82f267efb5dcc137395",
    measurementId: "G-HMY8J90DEQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export auth and db for use in other files
export { auth, db };
