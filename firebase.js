// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebasestorage"
import { collection, getDocs } from "firebase/firebasestorage"
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