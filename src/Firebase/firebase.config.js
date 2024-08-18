// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaixV4al-g_VRaXFzm4DYJ1Dke63tNsf4",
  authDomain: "job-task-assignment-ab7ad.firebaseapp.com",
  projectId: "job-task-assignment-ab7ad",
  storageBucket: "job-task-assignment-ab7ad.appspot.com",
  messagingSenderId: "567307301056",
  appId: "1:567307301056:web:5936d8a2415e96d73e7d25",
  measurementId: "G-4WJ85FG689"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
const analytics = getAnalytics(app);