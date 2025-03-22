// Firebase Configuration
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
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Firebase Authentication Reference
const auth = firebase.auth();
const db = firebase.firestore();
