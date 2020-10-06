import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyD1zSEQZSCeyBcu070pblfJUerEyfy_FNU",
    authDomain: "quizer-b15a0.firebaseapp.com",
    databaseURL: "https://quizer-b15a0.firebaseio.com",
    projectId: "quizer-b15a0",
    storageBucket: "quizer-b15a0.appspot.com",
    messagingSenderId: "548146693418",
    appId: "1:548146693418:web:1db82a957f4b6988c08a53",
    measurementId: "G-3BHW2W83XW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase