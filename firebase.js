// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

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

// Load products from Firestore
async function loadProducts() {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    
    const productTable = document.getElementById('productTable');
    const dataDiv = document.getElementById('data');
    const errorDiv = document.getElementById('error');
    
    productTable.innerHTML = '';
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${data.name || 'N/A'}</td>
        <td>${data.type || 'N/A'}</td>
        <td>${data.quantity || 0}</td>
      `;
      productTable.appendChild(row);
    });
    
    dataDiv.style.display = 'block';
    errorDiv.style.display = 'none';
    
  } catch (error) {
    console.error('Błąd przy ładowaniu produktów:', error);
    const errorDiv = document.getElementById('error');
    errorDiv.style.display = 'block';
    errorDiv.innerHTML = `<strong>Błąd:</strong> ${error.message}`;
  }
}

loadProducts();