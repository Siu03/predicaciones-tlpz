import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAycVsoLNqjvP5EMo_4YPA0sw6NNCl3kSE",
    authDomain: "predicaciones-tlpz.firebaseapp.com",
    projectId: "predicaciones-tlpz",
    storageBucket: "predicaciones-tlpz.appspot.com",
    messagingSenderId: "427573088168",
    appId: "1:427573088168:web:1fd4a95a1dc3e077f6179d",
    measurementId: "G-9DFRLTCWDQ"
};

export default firebase.initializeApp(firebaseConfig);