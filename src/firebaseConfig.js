import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBkNpWCZxAr64xnT3fFBMpogBDmA2TQIqA",
    authDomain: "my-project-db33c.firebaseapp.com",
    projectId: "my-project-db33c",
    storageBucket: "my-project-db33c.appspot.com",
    messagingSenderId: "159566451053",
    appId: "1:159566451053:web:fe70fc40a3100c31458a64"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
