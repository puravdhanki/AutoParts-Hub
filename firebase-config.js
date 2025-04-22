// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyps1XHM93cWNqY5P7TAizi2OB2aPyfME",
  authDomain: "e-commerce-website-2025.firebaseapp.com",
  projectId: "e-commerce-website-2025",
  storageBucket: "e-commerce-website-2025.firebasestorage.app",
  messagingSenderId: "765530896977",
  appId: "1:765530896977:web:ca8360211bac84bfdd1670",
  measurementId: "G-M6WEX48FZ2"
};
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Firebase services
  const db = firebase.firestore();
  const auth = firebase.auth();
  
  // Collection references
  const ordersCollection = db.collection('orders');
  const customersCollection = db.collection('customers');