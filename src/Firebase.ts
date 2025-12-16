// src/firebase.ts
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  OAuthProvider,
} from "firebase/auth";

// ⚠️ Use the config shown in your Firebase "Add web app" screen
// If any value is different in your console, overwrite it here.
const firebaseConfig = {
  apiKey: "AIzaSyDN2tJaAlmW9P0nqhWKJcrfgDU-uFmDZUE",
  authDomain: "job-career-nepal.firebaseapp.com",
  projectId: "job-career-nepal",
  storageBucket: "job-career-nepal.firebasestorage.app",
  messagingSenderId: "55453931932",
  appId: "1:55453931932:web:451251fea61b1541141059",
  measurementId: "G-2VJC7TL76J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth instance
export const auth = getAuth(app);

// Google provider (this will use the Google provider you just enabled)
export const googleProvider = new GoogleAuthProvider();

// Apple provider – this REQUIRES extra setup in Apple Developer + Firebase
// UI will work but sign-in will fail until Apple is fully configured.
export const appleProvider = new OAuthProvider("apple.com");
export { app };
