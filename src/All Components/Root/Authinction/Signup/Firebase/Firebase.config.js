// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm-7dTnw6KjHnrjVbGKnrsctXYyINKlDc",
  authDomain: "travlinwrp.firebaseapp.com",
  projectId: "travlinwrp",
  storageBucket: "travlinwrp.appspot.com",
  messagingSenderId: "719188747206",
  appId: "1:719188747206:web:b615dc47920fd66b1b08c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app