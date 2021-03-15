// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
require('@firebase/firestore')




const firebaseConfig = {
    apiKey: "AIzaSyBYoz9j3kTqNXzoUwumCTtU9hEH0ckDAds",
    authDomain: "book-santa-bb081.firebaseapp.com",
    databaseURL: "https://book-santa-bb081.firebaseio.com",
    projectId: "book-santa-bb081",
    storageBucket: "book-santa-bb081.appspot.com",
    messagingSenderId: "509454014624",
    appId: "1:509454014624:web:141bd46d0d18b447be11c5",
    measurementId: "G-61P7RH2X31"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();