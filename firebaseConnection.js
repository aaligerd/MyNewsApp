
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
const initapp=require('firebase/app');
const admin=require('firebase-admin');

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMcFNO2GQknsF0B1ses0tLHRkqGzyc2IY",
  authDomain: "gamingnewsapp-bff4c.firebaseapp.com",
  databaseURL: "https://gamingnewsapp-bff4c.firebaseio.com",
  projectId: "gamingnewsapp-bff4c",
  storageBucket: "gamingnewsapp-bff4c.appspot.com",
  messagingSenderId: "38751514309",
  appId: "1:38751514309:web:ffcb08b663e6c0d03dcaac",
  measurementId: "G-XH8X4HCB3E"
};

// Initialize Firebase
admin.initializeApp(firebaseConfig);
const fdb=admin.firestore();


function getData(){
  const snapshot = fdb.collection('trending').get().then().catch((err)=>{new Error(err)});

}
getData();

