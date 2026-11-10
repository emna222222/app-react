// Import the functions you need from the SDKs you need
import app from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIcCdCto4SqI3QGKlcnqATF725wSkCOV4",
  authDomain: "whatsapp26-5b17f.firebaseapp.com",
  databaseURL: "https://whatsapp26-5b17f-default-rtdb.firebaseio.com",
  projectId: "whatsapp26-5b17f",
  storageBucket: "whatsapp26-5b17f.firebasestorage.app",
  messagingSenderId: "708996690008",
  appId: "1:708996690008:web:b5e3ac4e9a86a030701a2d",
  measurementId: "G-ELGR93JS35"
};

// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);
export default firebase;