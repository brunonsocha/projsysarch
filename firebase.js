// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKHxrQMYPp2FfydgFkwVHnssZ4eW5LMaU",
  authDomain: "prosysmob-5d7d9.firebaseapp.com",
  projectId: "prosysmob-5d7d9",
  storageBucket: "prosysmob-5d7d9.firebasestorage.app",
  messagingSenderId: "303969123495",
  appId: "1:303969123495:web:fb56de75cdd558ac742f82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const querySnapshot = await getDocs(collection(db, "products"));

querySnapshot.forEach((doc) => {
  console.log(doc.data());
  console.log(doc.data()['name'],doc.data()['type'],doc.data()['quantity']);
});