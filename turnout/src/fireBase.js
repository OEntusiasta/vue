import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyAcXLlAzhzyYYXt94fmW788iUxDrfghPQQ",
    authDomain: "turnout-5391f.firebaseapp.com",
    projectId: "turnout-5391f",
    storageBucket: "turnout-5391f.appspot.com",
    messagingSenderId: "545005679349",
    appId: "1:545005679349:web:25faca8c295dd1766a0bbc"
};

export const fireBase = firebase.initializeApp(config)