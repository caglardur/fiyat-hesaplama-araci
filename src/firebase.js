// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAULCS-YPVIK9Y-Rh1WDfuPq1J9x1MiJK4",
  authDomain: "aaaa-48ff8.firebaseapp.com",
  projectId: "aaaa-48ff8",
  storageBucket: "aaaa-48ff8.appspot.com",
  messagingSenderId: "250563155501",
  appId: "1:250563155501:web:5f9c441a718605a92dcaa4",
  measurementId: "G-PNGKWBNNTC"
}

// Initialize Firebase
initializeApp(firebaseConfig)
const db = getFirestore()

export default db
