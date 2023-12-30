// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWtPW7K1Hgsk44BTygmx2C4H20xEPjNEM",
  authDomain: "netflix-prigya-project.firebaseapp.com",
  projectId: "netflix-prigya-project",
  storageBucket: "netflix-prigya-project.appspot.com",
  databaseURL: "https://netflix-prigya-project-default-rtdb.firebaseio.com",
  messagingSenderId: "491837656385",
  appId: "1:491837656385:web:d9cc387b31ce6be6fb25c0",
  measurementId: "G-J9R2MFXMV3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth();
export { app, auth, db, ref };
