import firebase from 'firebase/app';
import 'firebase/database'; 

const firebaseConfig = {
    apiKey: "AIzaSyDVskErTN3ct41QGqzvpd44yc65n8SOvYM",
    authDomain: "chocolate-f03a1.firebaseapp.com",
    databaseURL: "https://chocolate-f03a1-default-rtdb.firebaseio.com",
    projectId: "chocolate-f03a1",
    storageBucket: "chocolate-f03a1.appspot.com",
    messagingSenderId: "604033886383",
    appId: "1:604033886383:web:ed00998bbc333676a64c5a",
    measurementId: "G-SHHXR74K8L"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {database as default}