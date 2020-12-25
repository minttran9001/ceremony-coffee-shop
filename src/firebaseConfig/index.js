import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
var firebaseConfig = {
    apiKey: "AIzaSyAxVCO_jtQJwXrEm9iKooLx4NQSwiIAvGs",
    authDomain: "ceremony-cafe.firebaseapp.com",
    projectId: "ceremony-cafe",
    storageBucket: "ceremony-cafe.appspot.com",
    messagingSenderId: "12236712382",
    appId: "1:12236712382:web:a7feb4deed3116fec071ef",
    measurementId: "G-QSSFW50WQJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots:true})

  export default firebase;